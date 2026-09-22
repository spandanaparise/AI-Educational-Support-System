from fastapi import APIRouter
from backend.routes.progress import student_progress

router = APIRouter()


@router.get("/teacher/dashboard")
def teacher_dashboard():

    students = []

    for student_id, progress in student_progress.items():

        # Calculate overall percentage
        if progress["total_questions_attempted"] > 0:
            overall_percentage = (
                progress["correct_answers"]
                / progress["total_questions_attempted"]
            ) * 100
        else:
            overall_percentage = 0

        # Determine performance
        if overall_percentage >= 80:
            performance = "Excellent"
        elif overall_percentage >= 60:
            performance = "Good"
        elif overall_percentage >= 40:
            performance = "Needs Improvement"
        else:
            performance = "Needs More Practice"

        # Find weak topics
        weak_topics = []

        for topic_name, data in progress["topics"].items():

            topic_percentage = (
                data["correct_answers"]
                / data["questions_attempted"]
            ) * 100

            if topic_percentage < 60:
                weak_topics.append({
                    "topic": topic_name,
                    "score": round(topic_percentage, 2)
                })

        students.append({
            "student_id": student_id,
            "quizzes_completed": progress["quizzes_completed"],
            "questions_attempted":
                progress["total_questions_attempted"],
            "correct_answers":
                progress["correct_answers"],
            "wrong_answers":
                progress["wrong_answers"],
            "overall_percentage":
                round(overall_percentage, 2),
            "performance":
                performance,
            "weak_topics":
                weak_topics
        })

    return {
        "total_students": len(students),
        "students": students
    }