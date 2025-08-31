from fastapi import FastAPI
import random
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/sunshine")
def get_sunshine():
    data = []
    for i in range(60):  # 7 days
        data.append({
            "date": (datetime.now() - timedelta(days=i)).strftime("%Y-%m-%d"),
            "hours": round(random.uniform(2, 10), 2)
        })
    return {"sunshine": list(reversed(data))}
@app.get("/")
def read_root():
    return {"message": "Sunshine API is running! Visit /sunshine for data."}

