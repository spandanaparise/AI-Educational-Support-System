from fastapi import APIRouter

router = APIRouter()


@router.get("/classes")
def get_classes():
    return {
        "classes": [
            {
                "id": 1,
                "subject": "Mathematics",
                "title": "Introduction to Algebra",
                "online_available": True,
                "offline_available": True
            },
            {
                "id": 2,
                "subject": "Science",
                "title": "Basics of Plants",
                "online_available": True,
                "offline_available": True
            }
        ]
    }