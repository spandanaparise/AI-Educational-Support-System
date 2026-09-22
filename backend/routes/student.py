from fastapi import APIRouter

router = APIRouter()

@router.get("/student")
def student():
    return {
        "message": "Welcome to the AI Educational Support System"
    }