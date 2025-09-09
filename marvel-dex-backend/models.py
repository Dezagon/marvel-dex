from sqlmodel import Field, SQLModel

class User(SQLModel, table=True):
    username: str = Field(primary_key=True)
    password: str
    hashed_password: str | None

class TokenData(SQLModel, table=True):
    username: str | None = Field(primary_key=True)

class Token(SQLModel, table=True):
    access_token: str = Field(primary_key=True)
    bearer: str = "bearer"