import express, { Request, Response, Router } from 'express';
import { UsersInterface } from '../models/users';
import { getAllUsers } from '../services/users';
import { userById } from '../services/users';
export const usersRouter = Router()


usersRouter.get('/', (req: Request, res: Response) => {
    const users: UsersInterface[] = getAllUsers()
    res.send(users)
})

usersRouter.get('/:id', (req: Request, res: Response) => {
    let id: string = req.params.id;
    const user: UsersInterface | undefined = userById(id)
    res.send(user)
});

usersRouter.post('/new', (req: Request, res: Response)=>{
    res.send({success: true})
})

usersRouter.put('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

usersRouter.patch('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})

usersRouter.delete('/:id', (req: Request, res: Response)=>{
    res.send({success: true})
})