import { RequestHandler } from 'express';
import vehicle from '../models/vehicle';


export const getAllVehicle: RequestHandler = async (req, res) => {
    try {
        const vehicles = await vehicle.findAll();
        res.json(vehicles);
    } catch (e) {
        res.status(500).json({ error: 'Vehicle not found' });
    }
};

export const createVehicle: RequestHandler = async (req, res) => {
    try {
        const { plate, chassi, renavam, model, brand, year } = req.body;
        const newVehicle = await vehicle.create({ plate, chassi, renavam, model, brand, year });
        res.status(201).json(newVehicle);
    } catch (e) {
        res.status(500).json({ error: 'Error creating vehicle' });
    }
};

export const updateVehicle: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { plate, chassi, renavam, model, brand, year } = req.body;
        const VehicleUp = await vehicle.findByPk(id);

        if (!VehicleUp) {
             res.status(404).json({ error: 'Vehicle not found' });
             return;
        }

        await VehicleUp.update({ plate, chassi, renavam, model, brand, year });
        res.json(VehicleUp);
    } catch (e) {
        res.status(500).json({ error: 'Error updating vehicle' });
    }
};

export const deleteVehicle: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicles = await vehicle.findByPk(id);

        if (!vehicles) {
             res.status(404).json({ error: 'Vehicle not found' });
             return;
        }

        await vehicles.destroy();
        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: 'Error deleting vehicle' });
    }
};
