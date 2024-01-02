import { Request, Response, Router } from 'express';
import { RoomsInterface } from '../models/rooms';
import { getAllRooms } from '../services/rooms';
import { roomById } from '../services/rooms';

export const roomsRouter = Router()


roomsRouter.get('/', (req: Request, res: Response) => {
   const rooms: RoomsInterface[] = getAllRooms()
   res.send(rooms)
})

roomsRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;
    const room: RoomsInterface | undefined = roomById(id)
    res.send(room)
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