from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import accounts, clothes
from authenticator import authenticator

app = FastAPI()

# app.include_router(test.router, tags=["test"])
app.include_router(authenticator.router, tags=["accounts"])
app.include_router(accounts.router, tags=["accounts"])
app.include_router(clothes.router, tags=["clothes"])


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
