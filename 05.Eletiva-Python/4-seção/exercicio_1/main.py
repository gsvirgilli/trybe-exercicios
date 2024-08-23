from fastapi import FastAPI

app = FastAPI(title="Olá, mundo!")


def my_dependency(query_string: str = None):
    ...
    return query_string


@app.get("/")
async def my_route(dependency: str = Depends(my_dependency)):
    return {"message": dependency}


@app.get("/")
def home():
    return {"message": "Hello World"}


@app.middleware("http")
async def my_custom_middleware(request: Request, call_next):
    ...
    response = await call_next(request)
    ...
    return response