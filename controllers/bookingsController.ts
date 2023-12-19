import express, { Request, Response, Router } from 'express';
import { BookingInterface } from '../models/booking';

import * as fs from 'fs'
import * as path from 'path'
export const bookingRouter = Router()

bookingRouter.get('/', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../data/bookings.json')

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).json({error: 'Error al leer el JSON'})
        }
        try{ const bookings: BookingInterface[] = JSON.parse(data)
        res.json(bookings)
        }
        catch (parseError){
            console.error(parseError)
            res.status(500).json({error: 'Error al cargar el contenido de los datos'})
        }
    })})

bookingRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;

    const filePath = path.join(__dirname, '../data/bookings.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Error al leer el JSON' });
        }

        try {
            const bookings: BookingInterface[] = JSON.parse(data);
            
            const booking = bookings.find((booking_select: BookingInterface) => booking_select.id === id);

            if (!booking) {
                return res.status(404).json({ error: 'Booking no encontrado' });
            }

            res.json(booking);
        } catch (parseError) {
            console.error(parseError);
            res.status(500).json({ error: 'Error al cargar el contenido de los datos' });
        }
    });
});

bookingRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

bookingRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})