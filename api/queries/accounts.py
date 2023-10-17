from queries.client import Queries
from models.accounts import (
    AccountOutWithHashedPassword,
    AccountOut,
    AccountIn,
    DuplicateAccountError,
)
from bson.objectid import ObjectId


class AccountRepo(Queries):
    COLLECTION = "accounts"

    def get_account_by_username(self, username: str):
        account = self.collection.find_one({"username": username})
        if account is None:
            return None
        account["id"] = str(account["_id"])
        return AccountOutWithHashedPassword(**account)

    def get_account_by_email(self, email: str) -> AccountOutWithHashedPassword:
        account = self.collection.find_one({"email": email})
        if account is None:
            return None
        account["id"] = str(account["_id"])
        return AccountOutWithHashedPassword(**account)

    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        account = info.dict()
        if (
            self.get_account_by_email(account["email"]) is not None
            or self.get_account_by_username(account["username"]) is not None
        ):
            raise DuplicateAccountError
        account["hashed_password"] = hashed_password
        del account["password"]
        response = self.collection.insert_one(account)
        account["id"] = str(response.inserted_id)
        return AccountOutWithHashedPassword(**account)

    def update(self, account_id: str, account: AccountIn):
        updated_account = account
        self.collection.update_one(
            {"_id": ObjectId(account_id)},
            {"$set": updated_account},
        )
        updated_account["id"] = account_id
        return AccountOut(**updated_account)
