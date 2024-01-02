import express, { Request, Response, Router } from 'express';
import { CommentsInterface } from '../models/comments';
import { allComments } from '../services/comments';
import { commentById } from '../services/comments';

export const commentsRouter = Router()

commentsRouter.get('/', (req: Request, res: Response) => {
    const commets: CommentsInterface[]  = allComments()
    res.send(commets)
   })

commentsRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;
    const comment: CommentsInterface | undefined = commentById(id)
    res.send(comment)
   
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