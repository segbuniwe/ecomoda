from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    email: str
    password: str
    first_name: str
    last_name: str


class AccountOut(BaseModel):
    id: str
    username: str
    email: str
    first_name: str
    last_name: str


class AccountOutWithHashedPassword(AccountOut):
    hashed_password: str


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str
