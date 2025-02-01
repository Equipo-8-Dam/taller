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
Luego edita backend/src/config/config.json y reemplaza sqlite por mysql.Después, ejecuta:

npx sequelize-cli db:migrate

🔷 5️⃣ Ejecutar el Servidor

Para iniciar el servidor en modo desarrollo:

npm run dev

Para ejecutar en modo producción:

npm start

Si todo está bien, verás:

🚀 Servidor corriendo en http://localhost:5000
✅ Base de datos conectada correctamente.

📌 Uso de la API

🔹 Clientes

POST /clientes → Agregar un cliente

GET /clientes → Obtener todos los clientes

GET /clientes/:id → Obtener un cliente por ID

PUT /clientes/:id → Actualizar un cliente

DELETE /clientes/:id → Eliminar un cliente

Ejemplo JSON para crear un cliente (POST /clientes):

{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juanperez@email.com",
  "telefono": "123456789",
  "direccion": "Calle Falsa 123"
}

🔹 Vehículos

POST /vehiculos → Agregar un vehículo

GET /vehiculos → Obtener todos los vehículos

GET /vehiculos/:id → Obtener un vehículo por ID

PUT /vehiculos/:id → Actualizar un vehículo

DELETE /vehiculos/:id → Eliminar un vehículo

Ejemplo JSON para crear un vehículo (POST /vehiculos):

{
  "marca": "Toyota",
  "modelo": "Corolla",
  "anio": 2022,
  "precio": 22000.50,
  "kilometraje": 5000,
  "tipo": "Sedán"
}

📌 Frontend

El frontend está en la carpeta frontend/. Para visualizar la app, abre frontend/index.html en un navegador.

📌 Subir Cambios a GitHub

Si realizas modificaciones, sigue estos pasos:

git add .
git commit -m "🔧 Cambios en la API de clientes y vehículos"
git push origin main

📌 Contacto y Contribución

👨‍💻 Desarrollado por:🔹 Ibone🔹 Guillermo🔹 David

Si encuentras un problema o tienes sugerencias, crea un Issue en GitHub.

🚀 ¡Gracias por usar este sistema de gestión de vehículos!

