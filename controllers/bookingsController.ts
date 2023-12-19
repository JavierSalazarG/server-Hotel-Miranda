import express, { Request, Response, Router } from 'express';
import { BookingInterface } from '../models/booking';
import { fetchAllBookings } from '../services/bookings';
import { bookingById } from '../services/bookings';
export const bookingRouter = Router()

bookingRouter.get('/', (req: Request, res: Response) => {
        const bookings: BookingInterface[] = fetchAllBookings()
        res.send(bookings)
    })

bookingRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;
    const booking: BookingInterface | undefined = bookingById(id)
    res.send(booking)
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