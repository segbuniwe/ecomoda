from queries.client import Queries
from bson.objectid import ObjectId
from models.clothes import ClothesIn, ClothesOut


class ClothesRepo(Queries):
    COLLECTION = "clothes"

    def create(
            self,
            account_id: str,
            clothes: ClothesIn,
            account_location: str
    ):
        clothes["account_id"] = account_id
        clothes["account_location"] = account_location
        self.collection.insert_one(clothes)
        clothes["id"] = str(clothes["_id"])
        return ClothesOut(**clothes)

    def get_all_for_account(self, account_id: str):
        results = []
        for clothes in self.collection.find({"account_id": account_id}):
            clothes["id"] = str(clothes["_id"])
            results.append(clothes)
        return results

    def delete(self, clothes_id: str, account_id: str):
        result = self.collection.delete_one(
            {"_id": ObjectId(clothes_id), "account_id": account_id}
        )
        return result.deleted_count > 0

    def update(
            self,
            clothes_id: str,
            clothes: ClothesIn,
            account_id: str,
            account_location: str,
    ):
        updated_clothes = clothes
        self.collection.update_one(
            {"_id": ObjectId(clothes_id), "account_id": account_id},
            {"$set": updated_clothes},
        )
        updated_clothes["id"] = clothes_id
        updated_clothes["account_id"] = account_id
        updated_clothes["account_location"] = account_location
        return ClothesOut(**updated_clothes)

    def get_all_clothes(self):
        results = []
        for clothes in self.collection.find():
            clothes["id"] = str(clothes["_id"])
            results.append(clothes)
        return results

    def get_clothes_by_id(self, clothes_id: str):
        clothes = self.collection.find_one({"_id": ObjectId(clothes_id)})
        if clothes is None:
            return None
        clothes["id"] = str(clothes["_id"])
        return ClothesOut(**clothes)
