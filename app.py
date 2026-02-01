from flask import Flask, render_template, jsonify
import json
import os
from config import FLASK_HOST, FLASK_PORT, FLASK_DEBUG, APP_NAME

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

# Cargar datos de temas desde JSON
def cargar_temas():
    ruta_json = os.path.join(os.path.dirname(__file__), 'data', 'temas.json')
    with open(ruta_json, 'r', encoding='utf-8') as archivo:
        return json.load(archivo)

temas = cargar_temas()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tema/<tema_id>')
def tema(tema_id):
    if tema_id in temas:
        return render_template('tema.html', tema_id=tema_id, tema=temas[tema_id])
    return "Tema no encontrado", 404

@app.route('/api/temas')
def api_temas():
    return jsonify(temas)

if __name__ == '__main__':
    print(f"\n{'='*50}")
    print(f"  {APP_NAME}")
    print(f"{'='*50}")
    print(f"\nAbriendo en: http://{FLASK_HOST}:{FLASK_PORT}")
    print(f"Para detener, presiona: Ctrl + C\n")
    app.run(host=FLASK_HOST, port=FLASK_PORT, debug=FLASK_DEBUG)
