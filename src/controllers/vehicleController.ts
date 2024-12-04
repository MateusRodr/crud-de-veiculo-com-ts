import { RequestHandler } from 'express';
import vehicleService from '../service/vehicleService';
import { z } from 'zod'

export const getAllVehicle: RequestHandler = async (req, res) => {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        res.json(vehicles);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
};

export const createVehicle: RequestHandler = async (req, res) => {
    try {
        const newVehicle = await vehicleService.createVehicle(req.body);
        res.status(201).json(newVehicle);
    } catch (e: any) {
        if (e instanceof z.ZodError) {
            res.status(400).json({ error: 'Validation error', details: e.errors });
        } else {
            res.status(409).json({ error: e.message });
        }
    }
};

export const updateVehicle: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVehicle = await vehicleService.updateVehicle(id, req.body);
        res.json(updatedVehicle);
    } catch (e: any) {
        res.status(404).json({ error: e.message });
    }
};

export const deleteVehicle: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await vehicleService.deleteVehicle(id);
        res.status(204).send();
    } catch (e: any) {
        res.status(404).json({ error: e.message });
    }
};
