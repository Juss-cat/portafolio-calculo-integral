# 📚 Portafolio de Cálculo Integral 📚

Una plataforma web completa de cálculo integral con explicaciones detalladas, ejemplos paso a paso y ejercicios interactivos de opción múltiple, desarrollada con Python (Flask), HTML5, CSS3 y JavaScript.

## 🎨 Características

✨ **Interfaz Intuitiva y Clara**
- Diseño limpio y accesible
- Tipografía legible (Quicksand y Comfortaa)
- Acceso desde navegadores web estándar

📚 **Contenido Completo**
- 8 temas principales de cálculo integral
- Explicaciones detalladas de conceptos
- Ejemplos resueltos paso a paso
- Ejercicios con opción múltiple
- Fórmulas destacadas para referencia rápida

💻 **Ejercicios Interactivos**
- Preguntas de opción múltiple con retroalimentación
- Explicaciones de respuestas correctas
- Progresión gradual de dificultad
- Navegación intuitiva entre temas

## 🚀 Instalación

### Requisitos
- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Pasos de instalación

1. **Abre una terminal** en la carpeta del proyecto

2. **Crea un entorno virtual** (recomendado):
   ```bash
   python -m venv venv
   ```

3. **Activa el entorno virtual**:
   - En Windows:
     ```bash
     venv\Scripts\activate
     ```
   - En macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Instala las dependencias**:
   ```bash
   pip install -r requirements.txt
   ```

## 🏃 Ejecutar la aplicación

### Local (Solo tu máquina)
1. **Desde la carpeta del proyecto**, ejecuta:
   ```bash
   python app.py
   ```

2. **Abre tu navegador** y ve a:
   ```
   http://localhost:5000
   ```

### En tu Red Local (Otros dispositivos)
1. Ejecuta la app como se indica arriba
2. En otro dispositivo en la misma red, ve a:
   ```
   http://192.168.100.110:5000
   ```
   (Reemplaza con tu IP local si es diferente)

## 📁 Estructura del proyecto

```
PORTAFOLIO DE CALCULO INTEGRAL/
├── app.py                 # Aplicación principal Flask
├── config.py              # Configuración centralizada
├── requirements.txt       # Dependencias de Python
├── README.md              # Este archivo
├── start.bat              # Script para iniciar en Windows
├── data/                  # Datos de la aplicación
│   └── temas.json         # Contenido de todos los temas
├── templates/             # Plantillas HTML
│   ├── base.html          # Plantilla base
│   ├── index.html         # Página de inicio
│   └── tema.html          # Plantilla para cada tema
└── static/                # Archivos estáticos
    ├── css/
    │   ├── style.css      # Estilos principales
    │   └── quiz.css       # Estilos para ejercicios
    └── js/
        ├── script.js      # JavaScript general
        └── quiz.js        # JavaScript para ejercicios
```

## 📖 Temas incluidos

1. **Conceptos Básicos** - Fundamentos del cálculo integral
2. **Suma de Riemann** - Aproximación de áreas bajo curvas
3. **Integrales Indefinidas** - Antiderivadas y propiedades
4. **Integrales Definidas** - Cálculo de áreas exactas
5. **Integración por Partes** - Técnica para productos de funciones
6. **Integración por Sustitución** - Cambio de variable
7. **Área bajo la Curva** - Aplicaciones prácticas
8. **Volumen de Sólidos de Revolución** - Cálculo de volúmenes

## 🎨 Personalización

### Cambiar colores
Abre [static/css/style.css](static/css/style.css) y modifica la sección de variables CSS:
```css
:root {
    --rosa-pastel: #FFB6D9;
    --verde-pastel: #B8E6D5;
    --azul-pastel: #B3D9FF;
    /* ... más colores ... */
}
```

### Agregar más temas
Abre [data/temas.json](data/temas.json) y agrega un nuevo objeto con la estructura deseada:
```json
{
  "mi-nuevo-tema": {
    "titulo": "Mi Nuevo Tema",
    "descripcion": "Descripción...",
    "contenido": { ... },
    "ejercicios": [ ... ]
  }
}
```
Luego actualiza la lista en [config.py](config.py) en la variable `TEMAS_PRINCIPALES`.

### Cambiar la tipografía
En [style.css](static/css/style.css), modifica la sección de `@import url` para usar otras fuentes de Google Fonts.

## 💡 Consejos de uso

- Haz click en cualquier fórmula para copiarla al portapapeles
- El botón flotante en la esquina inferior derecha te ayuda a volver arriba
- Las tarjetas de temas son interactivas, puedes hacer click en ellas
- La página es completamente responsive, úsala en cualquier dispositivo

## 🔧 Solución de problemas

**El puerto 5000 ya está en uso:**
Edita `app.py` y cambia `port=5000` por otro número, ej: `port=5001`

**No puedo acceder a la página:**
Asegúrate que:
- El servidor está corriendo (verás en la terminal)
- La dirección sea `http://localhost:5000` (no https)
- El puerto es el correcto

**Los estilos no se ven correctamente:**
- Limpia el caché del navegador (Ctrl+Shift+Del)
- Recarga la página (Ctrl+F5)

## 📝 Próximas mejoras

- [ ] Base de datos para guardar progreso
- [ ] Quiz interactivos
- [ ] Gráficas con Matplotlib/Plotly
- [ ] Modo oscuro
- [ ] Generador de ejercicios aleatorios
- [ ] Descarga de resumen en PDF

## 📄 Licencia

Este proyecto es de uso libre. ¡Úsalo, modifícalo y comparte! 

## 💌 Créditos

Hecho con ❤️ para aprender y disfrutar del cálculo integral.

---

¿Necesitas ayuda? ¡Revisa los ejercicios y ejemplos en cada tema! 🚀✨
