import { Router } from 'express';
import { getAllVehicle, createVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicleController';

const router = Router();

router.get('/vehicle', getAllVehicle);
router.post('/vehicle', createVehicle);
router.put('/vehicle/:id', updateVehicle);
router.delete('/vehicle/:id', deleteVehicle);

export default router;