const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    logging: false, // Desactiva logs en consola
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Base de datos conectada correctamente.');
        await sequelize.sync({ alter: true }); // Crea las tablas si no existen
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
