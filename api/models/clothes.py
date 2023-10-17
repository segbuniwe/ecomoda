from pydantic import BaseModel
from typing import List


class ClothesIn(BaseModel):
    name: str
    image: str
    age: int


class ClothesOut(ClothesIn):
    id: str
    account_id: str
    account_location: str


class Clothes(BaseModel):
    clothes: List[ClothesOut]
