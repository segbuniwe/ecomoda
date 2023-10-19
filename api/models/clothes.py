from pydantic import BaseModel
from typing import List


class ClothesIn(BaseModel):
    name: str
    image: dict | str
    description: str
    size: str


class ClothesOut(ClothesIn):
    id: str
    account_id: str
    account_location: str
    account_email: str


class Clothes(BaseModel):
    clothes: List[ClothesOut]
