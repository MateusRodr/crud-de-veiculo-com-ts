import request from 'supertest';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json()); 

const vehicle = (req: Request, res: Response) => {
    res.status(200).json({ plate: 'CXZ-6245' });
};

const createVehicle = (req: Request, res: Response) => {
    res.status(201).json({ Model: "Mustan" });
};

const configVehicle = (req: Request, res: Response) => {
    res.status(200).json(req.body);
};

const dltVeehicle = (req: Request, res: Response) => {
    res.status(200).json({message: "vehicle delete successful"})
}

app.get('/vehicle', vehicle);
app.post('/vehicle', createVehicle);
app.put('/vehicle/:id', configVehicle);
app.delete('/vehicle/:id', dltVeehicle);

describe('Test router API', () => {
    it('test router GET', async () => {
        const response = await request(app).get('/vehicle');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('plate', 'CXZ-6245');
    });

    it('test router POST', async () => {
        const response = await request(app).post('/vehicle');
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("Model", "Mustan");
    });

    it('test router PUT', async () => {
        const testData = {
            plate: "AIR-3760",
            chassi: "2cv6m9DJRlUmU7983",
            renavam: "11645740832",
            model: "Mustang", 
            brand: "Série 5 Gran Turismo",
            year: 2024,
        };

        const response = await request(app).put('/vehicle/2').send(testData);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("model", "Mustang"); 
    });

    it("test router delete", async () => {
        const response = await request(app).delete('/vehicle/2');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("message", "vehicle delete successful")
    })
});
