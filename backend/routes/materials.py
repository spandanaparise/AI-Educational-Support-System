from fastapi import APIRouter

router = APIRouter()


materials_data = {
    "Mathematics": [
        {
            "topic": "Algebra",
            "pdf": "algebra_notes.pdf",
            "video": "algebra_explanation.mp4",
            "available_offline": True
        },
        {
            "topic": "Geometry",
            "pdf": "geometry_notes.pdf",
            "video": "geometry_explanation.mp4",
            "available_offline": True
        },
        {
            "topic": "Fractions",
            "pdf": "fractions_notes.pdf",
            "video": "fractions_explanation.mp4",
            "available_offline": True
        }
    ],

    "Science": [
        {
            "topic": "Plants",
            "pdf": "plants_notes.pdf",
            "video": "plants_explanation.mp4",
            "available_offline": True
        },
        {
            "topic": "Animals",
            "pdf": "animals_notes.pdf",
            "video": "animals_explanation.mp4",
            "available_offline": True
        },
        {
            "topic": "Human Body",
            "pdf": "human_body_notes.pdf",
            "video": "human_body_explanation.mp4",
            "available_offline": True
        }
    ],

    "English": [
        {
            "topic": "Grammar",
            "pdf": "english_grammar_notes.pdf",
            "video": "english_grammar_explanation.mp4",
            "available_offline": True
        },
        {
            "topic": "Vocabulary",
            "pdf": "vocabulary_notes.pdf",
            "video": "vocabulary_explanation.mp4",
            "available_offline": True
        }
    ],

    "Hindi": [
        {
            "topic": "Grammar",
            "pdf": "hindi_grammar_notes.pdf",
            "video": "hindi_grammar_explanation.mp4",
            "available_offline": True
        }
    ],

    "Telugu": [
        {
            "topic": "Grammar",
            "pdf": "telugu_grammar_notes.pdf",
            "video": "telugu_grammar_explanation.mp4",
            "available_offline": True
        }
    ],

    "Social Studies": [
        {
            "topic": "History",
            "pdf": "history_notes.pdf",
            "video": "history_explanation.mp4",
            "available_offline": True
        },
        {
            "topic": "Geography",
            "pdf": "geography_notes.pdf",
            "video": "geography_explanation.mp4",
            "available_offline": True
        },
        {
            "topic": "Civics",
            "pdf": "civics_notes.pdf",
            "video": "civics_explanation.mp4",
            "available_offline": True
        }
    ]
}


@router.get("/materials")
def get_materials(subject: str):

    if subject not in materials_data:
        return {
            "message": "Subject not found",
            "available_subjects": list(materials_data.keys())
        }

    return {
        "subject": subject,
        "materials": materials_data[subject]
    }


@router.get("/materials/topic")
def get_topic_material(
    subject: str,
    topic: str
):

    if subject not in materials_data:
        return {
            "message": "Subject not found"
        }

    for material in materials_data[subject]:

        if material["topic"] == topic:
            return {
                "subject": subject,
                "topic": topic,
                "pdf": material["pdf"],
                "video": material["video"],
                "available_offline": material["available_offline"]
            }

    return {
        "message": "Topic not found for this subject",
        "subject": subject
    }


@router.get("/tasks")
def get_tasks(subject: str):

    tasks = {
        "Mathematics": [
            "Solve 10 Algebra problems",
            "Complete Geometry exercise"
        ],

        "Science": [
            "Write 5 facts about Plants",
            "Complete Human Body worksheet"
        ],

        "English": [
            "Complete Grammar exercise",
            "Learn 10 new vocabulary words"
        ],

        "Hindi": [
            "Complete Hindi Grammar exercise"
        ],

        "Telugu": [
            "Complete Telugu Grammar exercise"
        ],

        "Social Studies": [
            "Read about History",
            "Complete Geography exercise"
        ]
    }

    if subject not in tasks:
        return {
            "message": "Subject not found",
            "available_subjects": list(tasks.keys())
        }

    return {
        "subject": subject,
        "tasks": tasks[subject]
    }
