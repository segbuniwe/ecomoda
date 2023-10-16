import os
import pymongo


MONGO_URL = os.environ["DATABASE_URL"]
client = pymongo.MongoClient(MONGO_URL)
db = client["ecomoda"]


class Queries:
    @property
    def collection(self):
        return db[self.COLLECTION]
