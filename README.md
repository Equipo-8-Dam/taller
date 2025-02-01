🚀 Proyecto Venta de Vehículos

Este es un sistema de gestión de venta de vehículos desarrollado con Node.js, Express, Sequelize y SQLiteMySQL en el backend, y un frontend en HTML + JavaScript.

📌 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema

✅ Node.js (versión recomendada LTS)✅ Git (para clonar el repositorio)✅ MySQL (Si usas MySQL en lugar de SQLite)✅ Postman (opcional, para probar la API)

📌 Instalación y Configuración

🔷 1️⃣ Clonar el Repositorio

Abre una terminal y ejecuta

git clone httpsgithub.comTU_USUARIOventa-vehiculos.git
cd venta-vehiculos

🔷 2️⃣ Configurar Variables de Entorno

Crea un archivo .env en la carpeta backend y agrega lo siguiente

PORT=5000
DB_DIALECT=sqlite
DB_STORAGE=srcdatabase.sqlite
# Para MySQL
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

🔵 Opción 2 Usando MySQL

Si usas MySQL, asegúrate de crear la base de datos manualmente con

CREATE DATABASE venta_vehiculos;
