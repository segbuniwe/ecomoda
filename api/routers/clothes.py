from fastapi import APIRouter, Depends
from models.clothes import (
    ClothesIn,
    ClothesOut,
    Clothes,
)
from queries.clothes import ClothesRepo
from authenticator import authenticator


router = APIRouter()


@router.post("/api/clothes", response_model=ClothesOut)
def create_clothing_item(
    clothes: ClothesIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ClothesRepo = Depends(),
):
    account_id = account_data["id"]
    account_location = account_data["location"]
    account_email = account_data["email"]
    return repo.create(
        account_id,
        clothes.dict(),
        account_location,
        account_email
    )


@router.get("/api/clothes/mine", response_model=Clothes)
def list_clothes_for_current_account(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ClothesRepo = Depends(),
):
    account_id = account_data["id"]
    return {"clothes": repo.get_all_for_account(account_id)}


@router.delete("/api/clothes/{clothes_id}")
def delete_clothing_item(
    clothes_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ClothesRepo = Depends(),
):
    return repo.delete(clothes_id=clothes_id, account_id=account_data["id"])


@router.put("/api/clothes/{clothes_id}", response_model=ClothesOut)
def update_clothing_item(
    clothes: ClothesIn,
    clothes_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ClothesRepo = Depends(),
):
    return repo.update(
        clothes_id=clothes_id,
        clothes=clothes.dict(),
        account_id=account_data["id"],
        account_location=account_data["location"],
        account_email=account_data["email"]
    )


@router.get("/api/clothes-list", response_model=Clothes)
def list_all_clothes(
    repo: ClothesRepo = Depends(),
):
    return {"clothes": repo.get_all_clothes()}


@router.get("/api/clothes/{clothes_id}", response_model=ClothesOut)
def list_clothes_by_id(
    clothes_id: str,
    repo: ClothesRepo = Depends(),
):
    return repo.get_clothes_by_id(clothes_id)
