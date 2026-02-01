@echo off
REM Script para preparar y subir a GitHub

echo.
echo ====================================
echo   Preparar para GitHub/Render
echo ====================================
echo.

REM Verificar si Git está instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git no está instalado
    echo Descárgalo en: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✓ Git está instalado
echo.

REM Inicializar git si no existe
if not exist ".git" (
    echo Inicializando repositorio Git...
    git init
    echo ✓ Repositorio inicializado
)

echo.
echo Ingresa tu email de GitHub (ej: tu@gmail.com):
set /p email=
git config --global user.email "%email%"

echo.
echo Ingresa tu nombre (ej: Tu Nombre):
set /p name=
git config --global user.name "%name%"

echo.
echo Agregando archivos...
git add .
echo ✓ Archivos agregados

echo.
echo Mensaje de commit:
set /p message=Mensaje: 
git commit -m "%message%"

echo.
echo ====================================
echo    PASOS SIGUIENTES EN GITHUB:
echo ====================================
echo.
echo 1. Ve a: https://github.com/new
echo 2. Nombre: portafolio-calculo-integral
echo 3. Selecciona "Public"
echo 4. Click "Create repository"
echo 5. Copia el comando:
echo    git remote add origin https://github.com/TUUSUARIO/portafolio-calculo-integral.git
echo 6. Pégalo aquí y presiona Enter
echo.

set /p remote=Ingresa el comando git remote add origin:
echo git %remote% | findstr "remote add origin" >nul
if errorlevel 1 (
    echo ERROR: Comando inválido
    pause
    exit /b 1
)

%remote%

echo.
echo Configurando rama...
git branch -M main

echo.
echo Subiendo a GitHub...
git push -u origin main

echo.
echo ✓ ¡Código subido a GitHub!
echo.
echo ====================================
echo    PRÓXIMO PASO - RENDER:
echo ====================================
echo 1. Ve a: https://render.com
echo 2. Regístrate con GitHub
echo 3. Click "+ New +" y selecciona "Web Service"
echo 4. Conecta tu repositorio
echo 5. Configurar como en GUIA_RENDER.md
echo.
echo ¡Presiona Enter para terminar!
pause
