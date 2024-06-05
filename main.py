from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/")
async def index():
    response = requests.get('http://localhost:3001')
    response_json = response.json()
    return response_json

@app.get("/hello_to_node")
async def hello_to_node():
    return {
        "message": "Hello I'm FastAPI"
    }
