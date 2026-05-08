from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

# 1. Conectamos la carpeta 'static' para que el HTML pueda cargar el CSS
app.mount("/static", StaticFiles(directory="static"), name="static")

# 2. Le decimos a FastAPI dónde están los HTML
templates = Jinja2Templates(directory="templates")

# 3. Usamos un decorador para la ruta raíz
@app.get("/")
def home(request: Request):
    return templates.TemplateResponse(
        "entrenar.html", 
        {"request": request, "usuario": "Desarrollador"} # Debe ser un diccionario simple
    )


return templates.TemplateResponse("entrenar.html", {"request": request, "usuario": "Desarrollador"})