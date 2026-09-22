from fastapi import APIRouter

router = APIRouter()


@router.get("/data-mode")
def get_data_mode():
    return {
        "data_saver": True,
        "video_quality": "low",
        "auto_download": False,
        "compressed_images": True
    }