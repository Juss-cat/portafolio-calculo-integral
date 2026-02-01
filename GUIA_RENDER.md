# 🚀 GUÍA COMPLETA: Desplegar en Render

## **PASO 1: Preparar tu Máquina** 💻

### Instalar Git
1. Descarga de: https://git-scm.com/download/win
2. Instala con las opciones por defecto
3. Reinicia tu PC

### Verificar que todo esté listo
Abre PowerShell y escribe:
```powershell
git --version
python --version
```

---

## **PASO 2: Subir tu Proyecto a GitHub** 📤

### 2.1 Crear cuenta en GitHub (si no tienes)
1. Ve a https://github.com
2. Click en "Sign up"
3. Completa el registro

### 2.2 Crear un nuevo repositorio
1. En GitHub, haz click en **"+"** arriba a la derecha
2. Selecciona **"New repository"**
3. Nombre: `portafolio-calculo-integral`
4. Selecciona **"Public"** (importante!)
5. Click en **"Create repository"**

### 2.3 Subir tu código desde PowerShell
En la carpeta del proyecto, ejecuta:

```powershell
# Inicializar git
git init

# Configurar tu usuario de GitHub
git config --global user.email "tu-email@gmail.com"
git config --global user.name "Tu Nombre"

# Agregar todos los archivos
git add .

# Crear commit
git commit -m "Portafolio de Cálculo Integral - Versión Inicial"

# Cambiar rama a main
git branch -M main

# Conectar con tu repositorio (reemplaza USERNAME y REPO)
git remote add origin https://github.com/USERNAME/portafolio-calculo-integral.git

# Subir a GitHub
git push -u origin main
```

---

## **PASO 3: Desplegar en Render** 🌐

### 3.1 Crear cuenta en Render
1. Ve a https://render.com
2. Click en **"Sign up"**
3. Selecciona **"GitHub"** y conecta tu cuenta

### 3.2 Crear Web Service
1. Una vez en el dashboard de Render
2. Click en **"+ New +"** (arriba a la derecha)
3. Selecciona **"Web Service"**
4. Click en **"Connect"** junto a tu repositorio `portafolio-calculo-integral`

### 3.3 Configurar el servicio
Rellena los campos así:

| Campo | Valor |
|-------|-------|
| **Name** | `portafolio-calculo` |
| **Environment** | `Python 3` |
| **Branch** | `main` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `gunicorn app:app` |
| **Plan** | `Free` |

### 3.4 Agregar variables de entorno (Opcional)
Abajo encontrarás **Environment**:
```
FLASK_ENV = production
```

### 3.5 Deploy
Click en **"Create Web Service"**

¡Render comenzará a desplegar automáticamente! ⏳

---

## **PASO 4: Esperar y Obtener tu Link** ⏱️

1. Verás un log de deployment en la pantalla
2. Espera a que termine (5-10 minutos aprox)
3. Cuando veas **"Live"** en verde, ¡está listo!
4. Tu link será algo como: `https://portafolio-calculo.onrender.com`

---

## **PASO 5: Usar tu Link** 🎉

Tu aplicación estará disponible en:
```
https://portafolio-calculo.onrender.com
```

**Puedes compartir este link con:**
- Amigos ✓
- Profesores ✓
- En el portafolio ✓
- En redes sociales ✓

¡Funciona desde **cualquier dispositivo** sin necesidad de tu PC prendida! 

---

## **SOLUCIÓN DE PROBLEMAS**

### "El deploy falla"
- Verifica que `requirements.txt` esté correcto
- Asegúrate que `app.py` tiene `if __name__ == '__main__':`

### "El link no abre"
- Espera 10 minutos después del deploy
- Borra cache del navegador (Ctrl+Shift+Del)
- Intenta en modo incógnito

### "Cambios no se ven"
- Haz commit en Git: `git add .`, `git commit -m "..."`, `git push`
- Render se actualizará automáticamente en segundos

---

## **ACTUALIZAR TU APP EN EL FUTURO**

Si quieres cambios:

```powershell
# 1. Edita tus archivos localmente
# 2. Luego ejecuta:

git add .
git commit -m "Descripción de cambios"
git push

# ¡Render se actualiza automáticamente!
```

---

¿Dudas en algún paso? ¡Pregunta! 🚀
