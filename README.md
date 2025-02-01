🚀 Proyecto Venta de Vehículos

Este es un sistema de gestión de venta de vehículos desarrollado con Node.js, Express, Sequelize y SQLite en el backend, y un frontend en HTML + JavaScript.

📌 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema

✅ Node.js (versión recomendada LTS)✅ Git (para clonar el repositorio)✅ MySQL (Si usas MySQL en lugar de SQLite)✅ Postman (opcional, para probar la API)

📌 # Instalación y Configuración

🔷 1️⃣ Clonar el Repositorio

Abre una terminal y ejecuta

git clone https://github.com/Equipo-8-Dam/taller

cd venta-vehiculos

🔷 2️⃣ Configurar Variables de Entorno

Crea un archivo .env en la carpeta backend y agrega lo siguiente

PORT=5000

DB_DIALECT=sqlite

DB_STORAGE=src/database.sqlite

DB_USERNAME=root

DB_PASSWORD=

DB_DATABASE=venta_vehiculos

DB_HOST=127.0.0.1

🔷 3️⃣ Instalar Dependencias

Ejecuta estos comandos en la raíz del proyecto

cd backend

npm install

🔷 4️⃣ Configurar la Base de Datos

🟢 Opción 1 Usando SQLite (Por defecto)

Ejecuta el siguiente comando para crear la base de datos y aplicar las migraciones

npx sequelize-cli dbmigrate

🔷 5️⃣ Ejecutar el Servidor

Para iniciar el servidor en modo desarrollo:

npm run dev

Para ejecutar en modo producción:

npm start

Si todo está bien, verás:

🚀 Servidor corriendo en http://localhost:5000

✅ Base de datos conectada correctamente.

📌 Frontend

El frontend está en la carpeta frontend/. Para visualizar la app, abre frontend/index.html en un navegador.


📌 Contacto y Contribución

👨‍💻 Desarrollado por:🔹 Ibone🔹 Guillermo🔹 David

Si encuentras un problema o tienes sugerencias, crea un Issue en GitHub.

🚀 ¡Gracias por usar este sistema de gestión de vehículos!

