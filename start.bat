@echo off
chcp 65001 > nul
cls
echo ================================================
echo   PORTAFOLIO DE CALCULO INTEGRAL
echo ================================================
echo.
echo Iniciando Flask y ngrok...
echo.

REM Iniciar Flask en una ventana
start "Flask Server" cmd /k ".\.venv\Scripts\python.exe app.py"

REM Esperar un poco para que Flask se inicie
timeout /t 3

REM Iniciar ngrok en otra ventana
start "ngrok Tunnel" cmd /k "cd ngrok && .\ngrok.exe http 5000"

echo.
echo ✓ Flask y ngrok están corriendo
echo ✓ Abre http://localhost:5000 en tu navegador
echo.
pause
