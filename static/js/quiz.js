// Sistema de ejercicios interactivos con opción múltiple

class Quiz {
    constructor(elementId, preguntas) {
        this.elementId = elementId;
        this.preguntas = preguntas;
        this.respuestasSeleccionadas = {};
        this.init();
    }

    init() {
        const container = document.getElementById(this.elementId);
        if (!container) return;

        container.innerHTML = '';
        this.preguntas.forEach((pregunta, index) => {
            container.appendChild(this.crearPregunta(pregunta, index));
        });

        // Botón de verificar
        const btn = document.createElement('button');
        btn.className = 'btn-verificar';
        btn.textContent = 'Verificar Respuestas';
        btn.onclick = () => this.verificarRespuestas();
        container.appendChild(btn);
    }

    crearPregunta(pregunta, index) {
        const div = document.createElement('div');
        div.className = 'quiz-pregunta';

        const titulo = document.createElement('h4');
        titulo.textContent = `Pregunta ${index + 1}: ${pregunta.pregunta}`;
        div.appendChild(titulo);

        const opcionesDiv = document.createElement('div');
        pregunta.opciones.forEach((opcion, i) => {
            const label = document.createElement('label');
            label.className = 'opcion';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `pregunta-${index}`;
            input.value = i;
            input.onchange = () => {
                this.respuestasSeleccionadas[index] = i;
            };

            const texto = document.createElement('span');
            texto.textContent = opcion;

            label.appendChild(input);
            label.appendChild(texto);
            opcionesDiv.appendChild(label);
        });

        div.appendChild(opcionesDiv);

        const mensajeDiv = document.createElement('div');
        mensajeDiv.id = `respuesta-${index}`;
        mensajeDiv.className = 'respuesta-mensaje';
        div.appendChild(mensajeDiv);

        return div;
    }

    verificarRespuestas() {
        let correctas = 0;

        this.preguntas.forEach((pregunta, index) => {
            const respuesta = this.respuestasSeleccionadas[index];
            const mensajeDiv = document.getElementById(`respuesta-${index}`);

            if (respuesta === undefined) {
                mensajeDiv.className = 'respuesta-mensaje mostrar respuesta-incorrecta';
                mensajeDiv.textContent = '⚠️ Debes seleccionar una respuesta';
                return;
            }

            const esCorrecta = respuesta === pregunta.correcta;

            if (esCorrecta) {
                correctas++;
                mensajeDiv.className = 'respuesta-mensaje mostrar respuesta-correcta';
                mensajeDiv.innerHTML = `✅ ¡Correcto! ${pregunta.explicacion || ''}`;
            } else {
                mensajeDiv.className = 'respuesta-mensaje mostrar respuesta-incorrecta';
                mensajeDiv.innerHTML = `❌ Incorrecto. La respuesta correcta es: <strong>${pregunta.opciones[pregunta.correcta]}</strong>. ${pregunta.explicacion || ''}`;
            }

            // Marcar opciones
            const opcionesRadios = document.querySelectorAll(`input[name="pregunta-${index}"]`);
            opcionesRadios.forEach((radio, i) => {
                const label = radio.parentElement;
                label.classList.remove('correcta', 'incorrecta');

                if (i === pregunta.correcta) {
                    label.classList.add('correcta');
                } else if (i === respuesta && !esCorrecta) {
                    label.classList.add('incorrecta');
                }
            });
        });

        // Mostrar puntuación
        const puntuacion = document.createElement('div');
        puntuacion.style.cssText = `
            background: linear-gradient(135deg, var(--rosa-pastel) 0%, var(--naranja-pastel) 100%);
            color: white;
            padding: 2em;
            border-radius: 15px;
            text-align: center;
            margin-top: 2em;
            font-size: 1.2em;
            font-weight: bold;
        `;
        puntuacion.innerHTML = `
            Puntuación: <strong>${correctas}/${this.preguntas.length}</strong><br>
            ${correctas === this.preguntas.length ? '¡Excelente! 🎉' : 'Intenta mejorar 💪'}
        `;

        // Remover puntuación anterior si existe
        const puntuacionAnterior = document.querySelector('.quiz-puntuacion');
        if (puntuacionAnterior) puntuacionAnterior.remove();

        puntuacion.className = 'quiz-puntuacion';
        document.getElementById(this.elementId).parentElement.appendChild(puntuacion);
    }
}

// Sistema de gráficas
class GraficaInteractiva {
    constructor(canvasId, tipo = 'area') {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.tipo = tipo;
        this.opcionActual = null;
        
        // Configurar tamaño del canvas
        this.canvas.width = Math.min(600, window.innerWidth - 40);
        this.canvas.height = 400;
    }

    dibujarGrafica(funcion = null, color = '#B8E6D5', titulo = '') {
        const padding = 50;
        const ancho = this.canvas.width - 2 * padding;
        const alto = this.canvas.height - 2 * padding;

        // Limpiar canvas
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Dibujar ejes
        this.dibujarEjes(padding);

        // Dibujar función si se proporciona
        if (funcion) {
            this.dibujarFuncion(funcion, padding, ancho, alto, color);
        }

        // Dibujar título
        if (titulo) {
            this.ctx.fillStyle = '#FFB6D9';
            this.ctx.font = 'bold 16px Quicksand';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(titulo, this.canvas.width / 2, 30);
        }
    }

    dibujarEjes(padding) {
        this.ctx.strokeStyle = '#4A4A4A';
        this.ctx.lineWidth = 2;

        // Eje X
        this.ctx.beginPath();
        this.ctx.moveTo(padding, this.canvas.height - padding);
        this.ctx.lineTo(this.canvas.width - padding, this.canvas.height - padding);
        this.ctx.stroke();

        // Eje Y
        this.ctx.beginPath();
        this.ctx.moveTo(padding, padding);
        this.ctx.lineTo(padding, this.canvas.height - padding);
        this.ctx.stroke();

        // Etiquetas
        this.ctx.fillStyle = '#4A4A4A';
        this.ctx.font = '12px Quicksand';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('x', this.canvas.width - 20, this.canvas.height - padding + 20);
        this.ctx.textAlign = 'right';
        this.ctx.fillText('y', padding - 10, 20);

        // Líneas de grid
        this.ctx.strokeStyle = 'rgba(255, 182, 217, 0.2)';
        this.ctx.lineWidth = 1;
        
        for (let i = 1; i < 5; i++) {
            const x = padding + (this.canvas.width - 2 * padding) * (i / 5);
            this.ctx.beginPath();
            this.ctx.moveTo(x, padding);
            this.ctx.lineTo(x, this.canvas.height - padding);
            this.ctx.stroke();

            const y = padding + (this.canvas.height - 2 * padding) * (i / 5);
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(this.canvas.width - padding, y);
            this.ctx.stroke();
        }
    }

    dibujarFuncion(funcion, padding, ancho, alto, color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = 'rgba(184, 230, 213, 0.3)';

        const puntos = [];
        
        for (let px = 0; px <= ancho; px += 2) {
            const x = px / (ancho / 10); // Escala de 0 a 10
            const y = funcion(x);
            const py = alto - (y * alto / 10); // Invertir eje Y

            puntos.push({
                x: padding + px,
                y: padding + py
            });
        }

        // Dibujar relleno
        this.ctx.beginPath();
        this.ctx.moveTo(padding, this.canvas.height - padding);
        puntos.forEach(punto => this.ctx.lineTo(punto.x, punto.y));
        this.ctx.lineTo(this.canvas.width - padding, this.canvas.height - padding);
        this.ctx.fill();

        // Dibujar línea
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        puntos.forEach((punto, i) => {
            if (i === 0) this.ctx.moveTo(punto.x, punto.y);
            else this.ctx.lineTo(punto.x, punto.y);
        });
        this.ctx.stroke();
    }

    seleccionarOpcion(index, opcion) {
        this.opcionActual = index;
        
        // Actualizar UI
        document.querySelectorAll('.opcion-grafica').forEach((el, i) => {
            el.classList.remove('seleccionada');
            if (i === index) el.classList.add('seleccionada');
        });

        // Dibujar gráfica
        this.dibujarGrafica(opcion.funcion, opcion.color, opcion.titulo);
    }
}

// Inicializar quizzes cuando carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Los quizzes específicos se inicializarán desde los templates
});
