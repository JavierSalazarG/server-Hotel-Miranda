import express, { Request, Response, Router } from 'express';
import { RoomsInterface } from '../models/rooms';

import * as fs from 'fs'
import * as path from 'path'
export const roomsRouter = Router()
const filePath = path.join(__dirname, '../data/rooms.json');

roomsRouter.get('/', (req: Request, res: Response) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).json({error: 'Error al leer el JSON'})
        }
        try{ const rooms: RoomsInterface[] = JSON.parse(data)
        res.json(rooms)
        }
        catch (parseError){
            console.error(parseError)
            res.status(500).json({error: 'Error al cargar el contenido de los datos'})
        }
    })})

roomsRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Error al leer el JSON' });
        }

        try {
            const rooms: RoomsInterface[] = JSON.parse(data);
            
            const room = rooms.find((room_select: RoomsInterface) => room_select.id === id);

            if (!room) {
                return res.status(404).json({ error: 'Booking no encontrado' });
            }

            res.json(room);
        } catch (parseError) {
            console.error(parseError);
            res.status(500).json({ error: 'Error al cargar el contenido de los datos' });
        }
    });
});

roomsRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomsRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomsRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

roomsRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})