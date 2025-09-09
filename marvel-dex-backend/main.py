from datetime import datetime, timedelta, timezone
from typing import Annotated
import os
from dotenv import load_dotenv

import jwt
from fastapi import Depends, FastAPI, HTTPException, status, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from sqlmodel import Session, select

from database import get_db
from models import User, Token, TokenData
from schemas import CreateUserRequest

app = FastAPI(title="Marvel Dex Backend")
router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Create the object that has the auth tools
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Random secret key used to SIGN the JWT tokens
# openssl rand -hex 32
SECRET_KEY = os.getenv("JWT_SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

origins = [
    "http://localhost:5173/",
    "http://127.0.0.1:8000/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods= ["*"],
    allow_headers=["*"],
)



def hash_password(password: str) -> str:
    return pwd_context.hash(password)

# Create a function to verify a password
def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

# Create function to get current user
async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)], db: Session = Depends(get_db)) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"}
    )
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except InvalidTokenError:
        raise credentials_exception
    user: User | None = db.get(User, token_data.username)
    if user is None:
        raise credentials_exception
    
    return user

# Create function that returns the current active user
async def get_current_active_user(current_user: Annotated[User, Depends(get_current_user)]) -> User:
    # if current_user.disabled:
    #     raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Inactive user")
    return current_user

# Create function that generates a token
def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=20)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Create function that authenticates a user
def authenticate_user(username: str, password: str, db: Session = Depends(get_db)):
    user: User = db.get(User, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

# Create login endpoint ("/login")
@router.post("/token", tags=["tokens"])
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: Session = Depends(get_db)) -> Token:
    user: User | None = authenticate_user(username=form_data.username, password=form_data.password, db=db)

    invalid_creds_message: str = "Incorrect username or password"

    if user is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=invalid_creds_message)

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": user.username}, expires_delta=access_token_expires)
    # Generate token
    return Token(access_token=access_token)

# Create endpoint to create user ("/users")
@router.post("/users", tags=["users"], status_code=status.HTTP_201_CREATED)
async def create_user(new_user: CreateUserRequest, db: Session = Depends(get_db)) -> None:
    hashed_password: str = hash_password(new_user.password)
    user: User = User(**new_user.model_dump(), hashed_password=hashed_password)
    db.add(user)
    db.commit()

# Get endpoint to get current active user
@router.get("/users/me", tags=["users"])
async def get_users_me(current_user: Annotated[User, Depends(get_current_active_user)]) -> User:
    return current_user

# Get endpoint to get all users
@router.get("/users", tags=["users"])
async def get_users(current_user: Annotated[User, Depends(get_current_active_user)], db: Session = Depends(get_db)) -> list[User]: return db.exec(select(User)).all()

app.include_router(router)