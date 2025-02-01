require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware importante

// Importar rutas
const clienteRoutes = require('./src/routes/clienteRoutes');
app.use('/clientes', clienteRoutes);

const vehiculoRoutes = require('./src/routes/vehiculoRoutes');
app.use('/vehiculos', vehiculoRoutes);


connectDB(); // Conectar a la base de datos antes de iniciar el servidor

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

