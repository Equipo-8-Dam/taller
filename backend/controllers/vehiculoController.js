const { Vehiculo } = require('../models/');

// Crear un nuevo vehículo
exports.crearVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.create(req.body);
        res.status(201).json(vehiculo);
    } catch (error) {
        console.error("❌ Error en la validación:", error);
        res.status(500).json({ error: error.errors ? error.errors.map(e => e.message) : error.message });
    }
};


// Obtener todos los vehículos
exports.obtenerVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un vehículo por ID
exports.obtenerVehiculoPorId = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByPk(req.params.id);
        if (!vehiculo) return res.status(404).json({ error: "Vehículo no encontrado" });
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un vehículo
exports.actualizarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByPk(req.params.id);
        if (!vehiculo) return res.status(404).json({ error: "Vehículo no encontrado" });
        await vehiculo.update(req.body);
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un vehículo
exports.eliminarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByPk(req.params.id);
        if (!vehiculo) return res.status(404).json({ error: "Vehículo no encontrado" });
        await vehiculo.destroy();
        res.json({ message: "Vehículo eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};