from fastapi import APIRouter

router = APIRouter()


@router.post("/weak-topics")
def detect_weak_topic(
    subject: str,
    topic: str,
    score: int
):
    if score < 40:
        recommendation = "Needs more practice"
    elif score < 70:
        recommendation = "Needs some revision"
    else:
        recommendation = "Good performance"

    return {
        "subject": subject,
        "topic": topic,
        "score": score,
        "recommendation": recommendation
    }