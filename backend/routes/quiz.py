from fastapi import APIRouter

router = APIRouter()


# ============================================================
# QUIZ QUESTION BANK
# ============================================================

quiz_data = {

    # ========================================================
    # MATHEMATICS
    # ========================================================

    "Mathematics": {

        "Algebra": [

            {
                "id": 1,
                "question": "What is the value of x if x + 5 = 12?",
                "options": ["5", "6", "7", "8"],
                "answer": "7",
                "difficulty": "Easy"
            },

            {
                "id": 2,
                "question": "What is the value of x if 2x = 20?",
                "options": ["5", "10", "15", "20"],
                "answer": "10",
                "difficulty": "Easy"
            },

            {
                "id": 3,
                "question": "Simplify: 3x + 2x",
                "options": ["5", "5x", "6x", "x"],
                "answer": "5x",
                "difficulty": "Easy"
            },

            {
                "id": 4,
                "question": "If x = 5, what is x²?",
                "options": ["10", "15", "20", "25"],
                "answer": "25",
                "difficulty": "Easy"
            },

            {
                "id": 5,
                "question": "What is the value of x if x - 8 = 10?",
                "options": ["2", "12", "18", "20"],
                "answer": "18",
                "difficulty": "Easy"
            },

            {
                "id": 6,
                "question": "Simplify: 7a - 3a",
                "options": ["4a", "10a", "21a", "4"],
                "answer": "4a",
                "difficulty": "Easy"
            },

            {
                "id": 7,
                "question": "What is the coefficient of x in 9x + 4?",
                "options": ["4", "9", "13", "x"],
                "answer": "9",
                "difficulty": "Medium"
            },

            {
                "id": 8,
                "question": "If 3x + 2 = 11, what is x?",
                "options": ["2", "3", "4", "5"],
                "answer": "3",
                "difficulty": "Medium"
            },

            {
                "id": 9,
                "question": "What is the value of 2x + 3 when x = 4?",
                "options": ["7", "9", "11", "12"],
                "answer": "11",
                "difficulty": "Medium"
            },

            {
                "id": 10,
                "question": "Which of the following is an algebraic expression?",
                "options": ["5 + 3", "2x + 5", "10", "20 ÷ 4"],
                "answer": "2x + 5",
                "difficulty": "Easy"
            }
        ],


        "Geometry": [

            {
                "id": 11,
                "question": "How many sides does a triangle have?",
                "options": ["2", "3", "4", "5"],
                "answer": "3",
                "difficulty": "Easy"
            },

            {
                "id": 12,
                "question": "How many sides does a square have?",
                "options": ["3", "4", "5", "6"],
                "answer": "4",
                "difficulty": "Easy"
            },

            {
                "id": 13,
                "question": "How many degrees are there in a right angle?",
                "options": ["45°", "90°", "180°", "360°"],
                "answer": "90°",
                "difficulty": "Easy"
            },

            {
                "id": 14,
                "question": "How many degrees are there in a straight angle?",
                "options": ["90°", "120°", "180°", "360°"],
                "answer": "180°",
                "difficulty": "Easy"
            },

            {
                "id": 15,
                "question": "A triangle has how many angles?",
                "options": ["2", "3", "4", "5"],
                "answer": "3",
                "difficulty": "Easy"
            },

            {
                "id": 16,
                "question": "What is the perimeter of a square with side 5 cm?",
                "options": ["10 cm", "15 cm", "20 cm", "25 cm"],
                "answer": "20 cm",
                "difficulty": "Medium"
            },

            {
                "id": 17,
                "question": "What is the area of a square with side 6 cm?",
                "options": ["12 cm²", "24 cm²", "36 cm²", "42 cm²"],
                "answer": "36 cm²",
                "difficulty": "Medium"
            }
        ],


        "Fractions": [

            {
                "id": 18,
                "question": "What is 1/2 + 1/2?",
                "options": ["1/2", "1", "2", "3/2"],
                "answer": "1",
                "difficulty": "Easy"
            },

            {
                "id": 19,
                "question": "Which fraction is equal to 1/2?",
                "options": ["2/4", "3/4", "1/3", "2/3"],
                "answer": "2/4",
                "difficulty": "Easy"
            },

            {
                "id": 20,
                "question": "What is 3/4 - 1/4?",
                "options": ["1/4", "1/2", "3/4", "1"],
                "answer": "1/2",
                "difficulty": "Easy"
            }
        ],


        "Percentages": [

            {
                "id": 21,
                "question": "What is 10% of 100?",
                "options": ["5", "10", "20", "25"],
                "answer": "10",
                "difficulty": "Easy"
            },

            {
                "id": 22,
                "question": "What is 50% of 200?",
                "options": ["50", "75", "100", "150"],
                "answer": "100",
                "difficulty": "Easy"
            },

            {
                "id": 23,
                "question": "25% is equal to which fraction?",
                "options": ["1/2", "1/3", "1/4", "3/4"],
                "answer": "1/4",
                "difficulty": "Easy"
            },

            {
                "id": 24,
                "question": "What is 20% of 50?",
                "options": ["5", "10", "15", "20"],
                "answer": "10",
                "difficulty": "Medium"
            }
        ]
    },


    # ========================================================
    # SCIENCE
    # ========================================================

    "Science": {

        "Plants": [

            {
                "id": 101,
                "question": "Which part of a plant absorbs water?",
                "options": ["Leaf", "Root", "Flower", "Fruit"],
                "answer": "Root",
                "difficulty": "Easy"
            },

            {
                "id": 102,
                "question": "Which part of a plant makes food?",
                "options": ["Root", "Stem", "Leaf", "Flower"],
                "answer": "Leaf",
                "difficulty": "Easy"
            },

            {
                "id": 103,
                "question": "What process do plants use to make food?",
                "options": [
                    "Respiration",
                    "Photosynthesis",
                    "Digestion",
                    "Evaporation"
                ],
                "answer": "Photosynthesis",
                "difficulty": "Easy"
            },

            {
                "id": 104,
                "question": "Which gas is mainly used by plants during photosynthesis?",
                "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                "answer": "Carbon dioxide",
                "difficulty": "Medium"
            },

            {
                "id": 105,
                "question": "Which part of the plant carries water from the roots?",
                "options": ["Stem", "Flower", "Fruit", "Seed"],
                "answer": "Stem",
                "difficulty": "Easy"
            }
        ],


        "Animals": [

            {
                "id": 106,
                "question": "Which animal is known as the King of the Jungle?",
                "options": ["Tiger", "Lion", "Elephant", "Bear"],
                "answer": "Lion",
                "difficulty": "Easy"
            },

            {
                "id": 107,
                "question": "Which animal gives us milk?",
                "options": ["Cow", "Lion", "Tiger", "Snake"],
                "answer": "Cow",
                "difficulty": "Easy"
            },

            {
                "id": 108,
                "question": "Which animal is known for having a long trunk?",
                "options": ["Horse", "Elephant", "Dog", "Cat"],
                "answer": "Elephant",
                "difficulty": "Easy"
            },

            {
                "id": 109,
                "question": "Which animal can live both on land and in water?",
                "options": ["Frog", "Cow", "Horse", "Dog"],
                "answer": "Frog",
                "difficulty": "Easy"
            }
        ],


        "Human Body": [

            {
                "id": 110,
                "question": "Which organ pumps blood throughout the body?",
                "options": ["Lungs", "Brain", "Heart", "Kidney"],
                "answer": "Heart",
                "difficulty": "Easy"
            },

            {
                "id": 111,
                "question": "Which organ helps us to breathe?",
                "options": ["Heart", "Lungs", "Stomach", "Brain"],
                "answer": "Lungs",
                "difficulty": "Easy"
            },

            {
                "id": 112,
                "question": "Which organ controls the activities of the body?",
                "options": ["Heart", "Brain", "Liver", "Kidney"],
                "answer": "Brain",
                "difficulty": "Easy"
            },

            {
                "id": 113,
                "question": "Which organ helps digest food?",
                "options": ["Stomach", "Heart", "Brain", "Lungs"],
                "answer": "Stomach",
                "difficulty": "Easy"
            }
        ],


        "Physics": [

            {
                "id": 114,
                "question": "What force pulls objects towards Earth?",
                "options": ["Friction", "Gravity", "Magnetism", "Pressure"],
                "answer": "Gravity",
                "difficulty": "Easy"
            },

            {
                "id": 115,
                "question": "Which device is used to measure temperature?",
                "options": ["Barometer", "Thermometer", "Speedometer", "Compass"],
                "answer": "Thermometer",
                "difficulty": "Easy"
            },

            {
                "id": 116,
                "question": "What is the SI unit of length?",
                "options": ["Kilogram", "Meter", "Second", "Newton"],
                "answer": "Meter",
                "difficulty": "Easy"
            }
        ]
    },


    # ========================================================
    # ENGLISH
    # ========================================================

    "English": {

        "Grammar": [

            {
                "id": 201,
                "question": "Which word is a noun?",
                "options": ["Run", "Beautiful", "School", "Quickly"],
                "answer": "School",
                "difficulty": "Easy"
            },

            {
                "id": 202,
                "question": "Which word is a verb?",
                "options": ["Run", "Beautiful", "School", "Happy"],
                "answer": "Run",
                "difficulty": "Easy"
            },

            {
                "id": 203,
                "question": "Which word is an adjective?",
                "options": ["Quickly", "Beautiful", "Run", "School"],
                "answer": "Beautiful",
                "difficulty": "Easy"
            },

            {
                "id": 204,
                "question": "Choose the correct sentence.",
                "options": [
                    "She go to school.",
                    "She goes to school.",
                    "She going school.",
                    "She gone school."
                ],
                "answer": "She goes to school.",
                "difficulty": "Easy"
            },

            {
                "id": 205,
                "question": "What is the plural of 'child'?",
                "options": ["Childs", "Childes", "Children", "Child"],
                "answer": "Children",
                "difficulty": "Easy"
            }
        ],


        "Vocabulary": [

            {
                "id": 206,
                "question": "What is the opposite of 'hot'?",
                "options": ["Warm", "Cold", "Big", "Fast"],
                "answer": "Cold",
                "difficulty": "Easy"
            },

            {
                "id": 207,
                "question": "What is a synonym of 'happy'?",
                "options": ["Sad", "Angry", "Joyful", "Tired"],
                "answer": "Joyful",
                "difficulty": "Easy"
            },

            {
                "id": 208,
                "question": "What is the opposite of 'large'?",
                "options": ["Huge", "Small", "Wide", "Long"],
                "answer": "Small",
                "difficulty": "Easy"
            },

            {
                "id": 209,
                "question": "What is a synonym of 'quick'?",
                "options": ["Slow", "Fast", "Late", "Weak"],
                "answer": "Fast",
                "difficulty": "Easy"
            }
        ]
    },


    # ========================================================
    # SOCIAL STUDIES
    # ========================================================

    "Social Studies": {

        "History": [

            {
                "id": 301,
                "question": "Who was known as the Father of the Indian Constitution?",
                "options": [
                    "Mahatma Gandhi",
                    "Dr. B. R. Ambedkar",
                    "Jawaharlal Nehru",
                    "Sardar Patel"
                ],
                "answer": "Dr. B. R. Ambedkar",
                "difficulty": "Easy"
            },

            {
                "id": 302,
                "question": "Who is known as the Father of the Nation in India?",
                "options": [
                    "Mahatma Gandhi",
                    "Subhash Chandra Bose",
                    "Bhagat Singh",
                    "Sardar Patel"
                ],
                "answer": "Mahatma Gandhi",
                "difficulty": "Easy"
            },

            {
                "id": 303,
                "question": "Who was the first Prime Minister of India?",
                "options": [
                    "Mahatma Gandhi",
                    "Jawaharlal Nehru",
                    "Sardar Patel",
                    "Rajendra Prasad"
                ],
                "answer": "Jawaharlal Nehru",
                "difficulty": "Easy"
            }
        ],


        "Geography": [

            {
                "id": 304,
                "question": "Which is the largest continent?",
                "options": [
                    "Africa",
                    "Asia",
                    "Europe",
                    "Australia"
                ],
                "answer": "Asia",
                "difficulty": "Easy"
            },

            {
                "id": 305,
                "question": "Which is the largest ocean?",
                "options": [
                    "Atlantic Ocean",
                    "Indian Ocean",
                    "Pacific Ocean",
                    "Arctic Ocean"
                ],
                "answer": "Pacific Ocean",
                "difficulty": "Easy"
            },

            {
                "id": 306,
                "question": "Which planet is known as the Red Planet?",
                "options": ["Earth", "Mars", "Jupiter", "Venus"],
                "answer": "Mars",
                "difficulty": "Easy"
            }
        ],


        "Civics": [

            {
                "id": 307,
                "question": "What is democracy?",
                "options": [
                    "Rule by one person",
                    "Rule by the people",
                    "Rule by an army",
                    "Rule by a king"
                ],
                "answer": "Rule by the people",
                "difficulty": "Easy"
            },

            {
                "id": 308,
                "question": "What is the supreme law of India?",
                "options": [
                    "The Constitution",
                    "The Parliament",
                    "The Supreme Court",
                    "The Police"
                ],
                "answer": "The Constitution",
                "difficulty": "Easy"
            }
        ]
    },


    # ========================================================
    # HINDI
    # ========================================================

    "Hindi": {

        "Grammar": [

            {
                "id": 401,
                "question": "हिंदी वर्णमाला में कितने स्वर होते हैं?",
                "options": ["10", "11", "12", "13"],
                "answer": "11",
                "difficulty": "Easy"
            },

            {
                "id": 402,
                "question": "'सुंदर' शब्द क्या है?",
                "options": ["संज्ञा", "विशेषण", "क्रिया", "सर्वनाम"],
                "answer": "विशेषण",
                "difficulty": "Easy"
            },

            {
                "id": 403,
                "question": "'लड़का' शब्द का बहुवचन क्या है?",
                "options": ["लड़की", "लड़के", "लड़कों", "लड़का"],
                "answer": "लड़के",
                "difficulty": "Easy"
            },

            {
                "id": 404,
                "question": "'दिन' का विलोम शब्द क्या है?",
                "options": ["सुबह", "रात", "शाम", "दोपहर"],
                "answer": "रात",
                "difficulty": "Easy"
            },

            {
                "id": 405,
                "question": "'जल' का पर्यायवाची शब्द क्या है?",
                "options": ["आकाश", "पानी", "अग्नि", "धरती"],
                "answer": "पानी",
                "difficulty": "Easy"
            }
        ]
    },


    # ========================================================
    # TELUGU
    # ========================================================

    "Telugu": {

        "Grammar": [

            {
                "id": 501,
                "question": "తెలుగు భాషలో అచ్చులు ఏమిటి?",
                "options": [
                    "అచ్చులు",
                    "హల్లులు",
                    "పదాలు",
                    "వాక్యాలు"
                ],
                "answer": "అచ్చులు",
                "difficulty": "Easy"
            },

            {
                "id": 502,
                "question": "‘పెద్ద’ అనే పదానికి వ్యతిరేక పదం ఏది?",
                "options": [
                    "చిన్న",
                    "మంచి",
                    "ఎక్కువ",
                    "పొడవు"
                ],
                "answer": "చిన్న",
                "difficulty": "Easy"
            },

            {
                "id": 503,
                "question": "‘నీరు’ అనే పదానికి పర్యాయపదం ఏది?",
                "options": [
                    "జలం",
                    "అగ్ని",
                    "గాలి",
                    "నేల"
                ],
                "answer": "జలం",
                "difficulty": "Easy"
            },

            {
                "id": 504,
                "question": "‘పిల్లలు’ ఏకవచనం ఏమిటి?",
                "options": [
                    "పిల్ల",
                    "పిల్లలు",
                    "పిల్లల",
                    "పిల్లకి"
                ],
                "answer": "పిల్ల",
                "difficulty": "Easy"
            }
        ]
    }
}


# ============================================================
# GET QUIZ
# ============================================================

@router.get("/quiz")
def get_quiz(subject: str, topic: str):

    if subject not in quiz_data:
        return {
            "message": "Subject not found",
            "available_subjects": list(quiz_data.keys())
        }

    if topic not in quiz_data[subject]:
        return {
            "message": "Topic not found",
            "available_topics": list(quiz_data[subject].keys())
        }

    return {
        "subject": subject,
        "topic": topic,
        "total_questions": len(quiz_data[subject][topic]),
        "questions": quiz_data[subject][topic]
    }


# ============================================================
# GET ALL SUBJECTS
# ============================================================

@router.get("/quiz/subjects")
def get_subjects():

    return {
        "subjects": list(quiz_data.keys())
    }


# ============================================================
# GET TOPICS FOR A SUBJECT
# ============================================================

@router.get("/quiz/topics")
def get_topics(subject: str):

    if subject not in quiz_data:
        return {
            "message": "Subject not found"
        }

    return {
        "subject": subject,
        "topics": list(quiz_data[subject].keys())
    }


# ============================================================
# GET QUESTION COUNT
# ============================================================

@router.get("/quiz/count")
def get_question_count(subject: str, topic: str):

    if subject not in quiz_data:
        return {
            "message": "Subject not found"
        }

    if topic not in quiz_data[subject]:
        return {
            "message": "Topic not found"
        }

    questions = quiz_data[subject][topic]

    return {
        "subject": subject,
        "topic": topic,
        "total_questions": len(questions)
    }