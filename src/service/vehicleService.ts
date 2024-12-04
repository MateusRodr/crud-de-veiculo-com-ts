// vehicleService.ts
import vehicle from '../models/vehicle';
import { vehicleSchema } from '../validations/vehicleValidation';
import { z } from 'zod';

const createVehicle = async (data: any) => {
    const parsedData = vehicleSchema.parse(data);

    const plateExists = await vehicle.findOne({ where: { plate: parsedData.plate } });
    const chassiExists = await vehicle.findOne({ where: { chassi: parsedData.chassi } });
    const renavamExists = await vehicle.findOne({ where: { renavam: parsedData.renavam } });

    if (plateExists || chassiExists || renavamExists) {
        throw new Error('Vehicle with the same plate, chassi, or renavam already exists');
    }

    return await vehicle.create(parsedData);
};

const getAllVehicles = async () => {
    return await vehicle.findAll();
};

const updateVehicle = async (id: string, data: any) => {
    const vehicleToUpdate = await vehicle.findByPk(id);

    if (!vehicleToUpdate) {
        throw new Error('Vehicle not found');
    }

    return await vehicleToUpdate.update(data);
};

const deleteVehicle = async (id: string) => {
    const vehicleToDelete = await vehicle.findByPk(id);

    if (!vehicleToDelete) {
        throw new Error('Vehicle not found');
    }

    await vehicleToDelete.destroy();
};

export default {
    createVehicle,
    getAllVehicles,
    updateVehicle,
    deleteVehicle,
};
