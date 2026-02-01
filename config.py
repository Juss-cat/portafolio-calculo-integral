"""
Configuración de la aplicación Portafolio de Cálculo Integral
Puedes editar estos valores para personalizar tu aplicación
"""

# Configuración del servidor
FLASK_HOST = "0.0.0.0"    # Accesible desde cualquier dispositivo de la red
FLASK_PORT = 5000         # Cambia si el puerto ya está en uso
FLASK_DEBUG = True        # True para desarrollo, False para producción

# Configuración de la aplicación
APP_NAME = "Portafolio de Cálculo Integral"
APP_VERSION = "1.0.0"
AUTHOR = "Tu Nombre"

# Tema personalizado (Cambiar valores para personalizar la apariencia)
THEME = {
    "titulo_principal": "📚 Cálculo Integral 📚",
    "subtitulo": "Tu portafolio completo de cálculo integral",
    "colores_primarios": {
        "rosa_pastel": "#FFB6D9",
        "verde_pastel": "#B8E6D5",
        "azul_pastel": "#B3D9FF",
        "naranja_pastel": "#FFD9B3",
        "crema": "#FFF9E6"
    },
    "tipografia": {
        "titulo": "Comfortaa",
        "cuerpo": "Quicksand"
    }
}

# Temas a mostrar en la página principal
TEMAS_PRINCIPALES = [
    "conceptos-basicos",
    "suma-riemann",
    "integrales-indefinidas",
    "integrales-definidas",
    "por-partes",
    "sustitucion",
    "area-bajo-curva",
    "volumen-solido"
]

# Configuración de ejercicios
MOSTRAR_EJERCICIOS = True
NUMERO_EJERCICIOS_POR_TEMA = 2

# Pie de página
FOOTER_TEXT = "Portafolio de Cálculo Integral - 2026"
FOOTER_EXTRA = "Hecho con amor y muchas integrales ✨"

# Contacto (para el futuro)
CONTACTO_EMAIL = "tu.email@ejemplo.com"
CONTACTO_TELEFONO = "+1 234 567 8900"

# Redes sociales (opcional)
REDES_SOCIALES = {
    "instagram": "https://instagram.com",
    "github": "https://github.com",
    "linkedin": "https://linkedin.com"
}
