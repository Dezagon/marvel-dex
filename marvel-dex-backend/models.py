from sqlmodel import Field, SQLModel

class User(SQLModel, table=True):
    username: str = Field(primary_key=True)
    hashed_password: str

class TokenData(SQLModel, table=True):
    username: str | None = Field(primary_key=True)

class Token(SQLModel, table=True):
    access_token: str = Field(primary_key=True)
    bearer: str = "bearer"