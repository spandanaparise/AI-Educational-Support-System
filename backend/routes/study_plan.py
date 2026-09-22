from fastapi import APIRouter

router = APIRouter()


@router.post("/study-plan")
def create_study_plan(
    grade: str,
    study_time: int,
    difficult_subject: str
):
    subjects = [
        "Hindi",
        "Telugu",
        "English",
        "Mathematics",
        "Science",
        "Social Studies"
    ]

    return {
        "message": "Personalized study plan created",
        "grade": grade,
        "subjects": subjects,
        "study_time_minutes": study_time,
        "difficult_subject": difficult_subject
    }