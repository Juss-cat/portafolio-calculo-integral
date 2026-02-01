// Script para agregar interactividad a la página

document.addEventListener('DOMContentLoaded', function() {
    // Marcar el link activo en la navegación
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Agregar efecto de click a las tarjetas
    const temaCards = document.querySelectorAll('.tema-card');
    temaCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('a');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });

    // Animación de las fórmulas
    const formulas = document.querySelectorAll('.formula');
    formulas.forEach(formula => {
        formula.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        formula.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll para los links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Agregar números a los ejercicios automáticamente
    const ejercicios = document.querySelectorAll('.ejercicio');
    ejercicios.forEach((ejercicio, index) => {
        const h4 = ejercicio.querySelector('h4');
        if (h4) {
            const currentText = h4.textContent;
            if (!currentText.includes('Ejercicio')) {
                h4.textContent = `Ejercicio ${index + 1}: ${currentText}`;
            }
        }
    });

    // Copiar fórmulas al portapapeles
    document.querySelectorAll('.formula').forEach(formula => {
        formula.style.cursor = 'pointer';
        formula.title = 'Click para copiar la fórmula';
        
        formula.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalBg = this.style.background;
                this.style.background = 'rgba(255, 255, 255, 0.2)';
                setTimeout(() => {
                    this.style.background = originalBg;
                }, 300);
                
                // Mostrar mensaje temporal
                const message = document.createElement('div');
                message.textContent = '✓ Copiado!';
                message.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 1em 2em;
                    border-radius: 10px;
                    z-index: 9999;
                    font-size: 1.2em;
                    pointer-events: none;
                `;
                document.body.appendChild(message);
                setTimeout(() => message.remove(), 1500);
            });
        });
    });

    // Botón flotante para volver arriba
    const createScrollButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.style.cssText = `
            position: fixed;
            bottom: 2em;
            right: 2em;
            background: linear-gradient(135deg, #FFB6D9 0%, #FFD9B3 100%);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 1.5em;
            cursor: pointer;
            display: none;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(255, 182, 217, 0.3);
            transition: all 0.3s ease;
            font-weight: bold;
        `;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(button);
    };
    
    createScrollButton();

    // Animación de entrada de elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.seccion, .ejemplo, .ejercicio').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Función para mostrar alertas personalizadas
function mostrarMensaje(texto, tipo = 'info') {
    const mensaje = document.createElement('div');
    const bg = tipo === 'exito' ? '#B8E6D5' : typ === 'error' ? '#FFB6D9' : '#B3D9FF';
    
    mensaje.style.cssText = `
        position: fixed;
        top: 2em;
        right: 2em;
        background: ${bg};
        color: white;
        padding: 1.5em 2em;
        border-radius: 10px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        animation: slideIn 0.3s ease;
    `;
    mensaje.textContent = texto;
    document.body.appendChild(mensaje);
    
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}
