import express, { Request, Response } from "express";
import { newToken } from "../middleware/login";

export const loginRouter = express.Router();

loginRouter.post('/', async (req: Request, res: Response) => {
    const {email, password} = req.body
    const token = newToken(email, password)
    if(token)
        res.json({token: token, status: 'ok'})
    res.status(400).json({error: 'Error al entrar'})
})