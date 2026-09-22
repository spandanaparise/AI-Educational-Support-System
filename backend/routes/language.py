from fastapi import APIRouter

router = APIRouter()


language_data = {
    "English": {
        "welcome": "Welcome to the AI Educational Support System",
        "start_learning": "Start Learning",
        "quiz": "Take Quiz",
        "progress": "View Progress"
    },

    "Telugu": {
        "welcome": "AI విద్యా సహాయ వ్యవస్థకు స్వాగతం",
        "start_learning": "చదువు ప్రారంభించండి",
        "quiz": "క్విజ్ రాయండి",
        "progress": "పురోగతిని చూడండి"
    },

    "Hindi": {
        "welcome": "AI शैक्षिक सहायता प्रणाली में आपका स्वागत है",
        "start_learning": "पढ़ाई शुरू करें",
        "quiz": "क्विज़ लें",
        "progress": "प्रगति देखें"
    }
}


@router.get("/languages")
def get_languages():

    return {
        "available_languages": list(language_data.keys())
    }


@router.get("/language")
def get_language(language: str):

    if language not in language_data:
        return {
            "message": "Language not supported",
            "available_languages": list(language_data.keys())
        }

    return {
        "language": language,
        "translations": language_data[language]
    }