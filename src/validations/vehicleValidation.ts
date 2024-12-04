import { z } from "zod";

const currentYear = new Date().getFullYear();

export const vehicleSchema = z.object({
    plate: z.string()
        .length(7, 'plate must be exactly 7 characters'),

    chassi: z.string()
        .length(17, 'chassi must be exactly 17 characters')
        .transform(val => String(val)), 

    renavam: z.string()
        .length(11, 'renavam must be exactly 11 characters')
        .transform(val => String(val)),
    
    model: z.string()
        .min(1, 'model is required')
        .max(30, 'model cannot exceed 30 characters'),

    brand: z.string()
        .min(1, 'brand is required')
        .max(30, 'brand cannot exceed 30 characters'),

    year: z.number()
        .min(1886, "year must be greater than or equal to 1886")
        .max(currentYear, `year cannot be greater than ${currentYear}`)
});
