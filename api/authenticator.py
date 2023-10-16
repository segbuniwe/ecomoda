import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from models.accounts import (
    AccountOut,
    AccountOutWithHashedPassword,
)
from queries.accounts import AccountRepo


class EcoModaAuthenticator(Authenticator):
    async def get_account_data(
        self,
        identifier: str,
        accounts: AccountRepo,
    ):
        is_email = '@' in identifier
        account = accounts.get_account_by_email(identifier) if is_email else accounts.get_account_by_username(identifier)

        return account

    def get_account_getter(
        self,
        accounts: AccountRepo = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: AccountOutWithHashedPassword):
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOut):
        return account.username, AccountOut(**account.dict())


authenticator = EcoModaAuthenticator(os.environ["SIGNING_KEY"])
