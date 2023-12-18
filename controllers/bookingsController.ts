import { Request, Response } from 'express';
import { BookingInterface } from '../models/booking';
import * as fs from 'fs'
import * as path from 'path'
export const getBookings = (req: Request, res: Response) => {
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
    })
}