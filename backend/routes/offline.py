from fastapi import APIRouter

router = APIRouter()


@router.get("/offline")
def get_offline_content():
    return {
        "message": "Offline learning content",
        "available": True,
        "downloadable_materials": [
            "Mathematics - Introduction to Algebra",
            "Science - Basics of Plants"
        ],
        "sync_required": True
    }