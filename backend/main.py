from fastapi import FastAPI
from backend.routes.student import router as student_router
from backend.routes.classes import router as classes_router
from backend.routes.offline import router as offline_router
from backend.routes.data_mode import router as data_mode_router
from backend.routes.study_plan import router as study_plan_router
from backend.routes.weak_topics import router as weak_topics_router
from backend.routes.quiz import router as quiz_router
from backend.routes.quiz_result import router as quiz_result_router
from backend.routes.progress import router as progress_router
from backend.routes.materials import router as materials_router
from backend.routes.teacher import router as teacher_router
from backend.routes.language import router as language_router

app = FastAPI()
app.include_router(student_router)
app.include_router(classes_router)
app.include_router(offline_router)
app.include_router(data_mode_router)
app.include_router(study_plan_router)
app.include_router(weak_topics_router)
app.include_router(quiz_router)
app.include_router(quiz_result_router)
app.include_router(progress_router)
app.include_router(materials_router)
app.include_router(teacher_router)
app.include_router(language_router)

@app.get("/")
def home():
    return {"message": "AI Educational Support System is running"}

@app.get("/student")
def student():
    return {
        "message": "Welcome to the AI Educational Support System",
        "supported_languages": ["English", "Telugu", "Hindi"]
    }