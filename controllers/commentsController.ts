import express, { Request, Response, Router } from 'express';
import { CommentsInterface } from '../models/comments';

import * as fs from 'fs'
import * as path from 'path'
export const commentsRouter = Router()

commentsRouter.get('/', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../data/bookings.json')

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).json({error: 'Error al leer el JSON'})
        }
        try{ const comments: CommentsInterface[] = JSON.parse(data)
        res.json(comments)
        }
        catch (parseError){
            console.error(parseError)
            res.status(500).json({error: 'Error al cargar el contenido de los datos'})
        }
    })})

commentsRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;

    const filePath = path.join(__dirname, '../data/comments.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Error al leer el JSON' });
        }

        try {
            const comments: CommentsInterface[] = JSON.parse(data);
            
            const comment = comments.find((comment_select: CommentsInterface) => comment_select.id.toString === id.toString);

            if (!comment) {
                return res.status(404).json({ error: 'Booking no encontrado' });
            }

            res.json(comment);
        } catch (parseError) {
            console.error(parseError);
            res.status(500).json({ error: 'Error al cargar el contenido de los datos' });
        }
    });
});

commentsRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

commentsRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

commentsRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

commentsRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})