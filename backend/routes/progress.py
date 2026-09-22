from fastapi import APIRouter
from backend.routes.quiz import quiz_data

router = APIRouter()

# Stores student progress while the server is running
student_progress = {}


@router.post("/progress")
def update_progress(
    student_id: str,
    subject: str,
    topic: str,
    total_questions: int,
    correct_answers: int
):

    # Check whether the subject exists
    if subject not in quiz_data:
        return {
            "message": "Invalid subject",
            "available_subjects": list(quiz_data.keys())
        }

    # Check whether the topic belongs to the selected subject
    if topic not in quiz_data[subject]:
        return {
            "message": "Invalid topic for this subject",
            "subject": subject,
            "available_topics": list(quiz_data[subject].keys())
        }

    # Validate total questions
    if total_questions <= 0:
        return {
            "message": "Total questions must be greater than 0"
        }

    # Validate correct answers
    if correct_answers < 0 or correct_answers > total_questions:
        return {
            "message": "Invalid number of correct answers"
        }

    # Calculate current quiz result
    wrong_answers = total_questions - correct_answers

    percentage = (correct_answers / total_questions) * 100

    # Create student record if it doesn't exist
    if student_id not in student_progress:
        student_progress[student_id] = {
            "quizzes_completed": 0,
            "total_questions_attempted": 0,
            "correct_answers": 0,
            "wrong_answers": 0,
            "subjects": {},
            "topics": {}
        }

    progress = student_progress[student_id]

    # Update overall progress
    progress["quizzes_completed"] += 1
    progress["total_questions_attempted"] += total_questions
    progress["correct_answers"] += correct_answers
    progress["wrong_answers"] += wrong_answers

    # Store subject-wise progress
    if subject not in progress["subjects"]:
        progress["subjects"][subject] = {
            "quizzes_completed": 0,
            "questions_attempted": 0,
            "correct_answers": 0
        }

    progress["subjects"][subject]["quizzes_completed"] += 1
    progress["subjects"][subject]["questions_attempted"] += total_questions
    progress["subjects"][subject]["correct_answers"] += correct_answers

    # Store topic-wise progress
    topic_key = f"{subject} - {topic}"

    if topic_key not in progress["topics"]:
        progress["topics"][topic_key] = {
            "questions_attempted": 0,
            "correct_answers": 0
        }

    progress["topics"][topic_key]["questions_attempted"] += total_questions
    progress["topics"][topic_key]["correct_answers"] += correct_answers

    # Calculate overall percentage
    overall_percentage = (
        progress["correct_answers"]
        / progress["total_questions_attempted"]
    ) * 100

    # Determine overall performance
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
                "score": round(topic_percentage, 2),
                "recommendation": "Needs more practice"
            })

    # Subject-wise percentages
    subject_progress = {}

    for subject_name, data in progress["subjects"].items():

        subject_percentage = (
            data["correct_answers"]
            / data["questions_attempted"]
        ) * 100

        subject_progress[subject_name] = {
            "quizzes_completed": data["quizzes_completed"],
            "questions_attempted": data["questions_attempted"],
            "correct_answers": data["correct_answers"],
            "percentage": round(subject_percentage, 2)
        }

    return {
        "message": "Progress updated successfully",

        "student_id": student_id,

        "latest_quiz": {
            "subject": subject,
            "topic": topic,
            "total_questions": total_questions,
            "correct_answers": correct_answers,
            "wrong_answers": wrong_answers,
            "percentage": round(percentage, 2)
        },

        "overall_progress": {
            "quizzes_completed": progress["quizzes_completed"],
            "total_questions_attempted":
                progress["total_questions_attempted"],
            "correct_answers": progress["correct_answers"],
            "wrong_answers": progress["wrong_answers"],
            "overall_percentage": round(overall_percentage, 2),
            "performance": performance
        },

        "subject_progress": subject_progress,

        "weak_topics": weak_topics
    }


@router.get("/progress/{student_id}")
def get_progress(student_id: str):

    # Check whether student exists
    if student_id not in student_progress:
        return {
            "message": "No progress found for this student"
        }

    progress = student_progress[student_id]

    # Calculate overall percentage
    overall_percentage = (
        progress["correct_answers"]
        / progress["total_questions_attempted"]
    ) * 100

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
                "score": round(topic_percentage, 2),
                "recommendation": "Needs more practice"
            })

    # Subject-wise progress
    subject_progress = {}

    for subject_name, data in progress["subjects"].items():

        subject_percentage = (
            data["correct_answers"]
            / data["questions_attempted"]
        ) * 100

        subject_progress[subject_name] = {
            "quizzes_completed": data["quizzes_completed"],
            "questions_attempted": data["questions_attempted"],
            "correct_answers": data["correct_answers"],
            "percentage": round(subject_percentage, 2)
        }

    return {
        "student_id": student_id,

        "quizzes_completed": progress["quizzes_completed"],

        "total_questions_attempted":
            progress["total_questions_attempted"],

        "correct_answers":
            progress["correct_answers"],

        "wrong_answers":
            progress["wrong_answers"],

        "overall_percentage":
            round(overall_percentage, 2),

        "performance":
            performance,

        "subjects":
            subject_progress,

        "weak_topics":
            weak_topics
    }