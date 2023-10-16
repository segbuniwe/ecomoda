from fastapi import APIRouter

router = APIRouter()


@router.get("/api/test")
def test():
    return {"message": "Hello world"}
