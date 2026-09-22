from fastapi import APIRouter

router = APIRouter()


@router.post("/quiz-result")
def calculate_quiz_result(
    total_questions: int,
    correct_answers: int
):
    wrong_answers = total_questions - correct_answers

    if total_questions > 0:
        percentage = (correct_answers / total_questions) * 100
    else:
        percentage = 0

    if percentage >= 80:
        performance = "Excellent"
    elif percentage >= 60:
        performance = "Good"
    elif percentage >= 40:
        performance = "Needs Improvement"
    else:
        performance = "Needs More Practice"

    return {
        "total_questions": total_questions,
        "correct_answers": correct_answers,
        "wrong_answers": wrong_answers,
        "percentage": round(percentage, 2),
        "performance": performance
    }