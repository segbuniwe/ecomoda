from pydantic import BaseModel


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
