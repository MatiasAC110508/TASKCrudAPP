# TASKCrudAPP
IT ONLY RUNS IN LOCAL DUE TO THE SIMULATED API
===============================

DEFAULT PROFILES:

    Admin Profile:

    -Email = admin@gmail.com
    -Password = 1234

    Default User:

    -Email = user@gmail.com
    -Password = 1234

===============================

ACCEPTANCE CRITERIA:

- Sistema de autenticación simulado (Done)
- Manejo de roles (user/admin) (Done)
- Consumo de API falsa con JSON Server (Done)
- Gestión de tareas (Done)
- Panel administrativo con métricas
- Persistencia de sesión (Done)
- Separación clara entre vistas según rol 

===============================

PRINCIPAL REQUIREMENTS:

-Registration page (Done)
-Admin page
-User page (Tasks list) (Done)

===============================

USER PAGE:

Task Manager JS – Simple Documentation

This JavaScript file is used to manage a task list.

Features / Purpose:

-Show profile function

-Functional "log-out" button

-Add tasks with Title, Description, Status, and Importance

-Edit existing tasks

-Delete tasks

-Hide tasks that are In Progress from the table

-Save tasks in localStorage so they persist after page reload

-Hide the table if there are no visible tasks

How it works:

-User enters task data in the form.

-Task is saved to localStorage.

-User can edit or delete tasks.

-Table updates automatically and hides if empty.

================================================

 Instalación y Configuración
Sigue estos pasos para correr el proyecto localmente:
Clonar el repositorio:
bash
git clone https://github.com
cd TASKCRUD
Usa el código con precaución.

Instalar dependencias de Tailwind (si deseas modificar estilos):
bash
npm install
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
Usa el código con precaución.

Ejecutar el Servidor de Datos (JSON Server):
Nota: Asegúrate de tener instalado json-server de forma global o vía npx.
bash
json-server --watch db.json --port 3000
