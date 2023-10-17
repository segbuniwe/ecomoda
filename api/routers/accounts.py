from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from authenticator import authenticator
from models.accounts import (
    AccountIn,
    DuplicateAccountError,
    AccountOut,
    AccountForm,
    AccountToken,
    HttpError
)
from queries.accounts import AccountRepo


router = APIRouter()


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountRepo = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(
        username=info.username,
        password=info.password
    )
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: dict = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.put("/api/accounts", response_model=AccountOut)
def update_account_info(
    account: AccountIn,
    account_id: str,
    repo: AccountRepo = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account_id = account_data["id"]
    return repo.update(
        account_id=account_id,
        account=account.dict(),
    )
