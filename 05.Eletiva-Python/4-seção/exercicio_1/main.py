from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()


class User(BaseModel):
    name: str
    age: int


@app.post("/users")
def create_user(user: User):
    return user
