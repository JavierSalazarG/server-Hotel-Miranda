import express, { Request, Response, response } from "express";
import { newToken } from "../middleware/login";
export const loginRouter = express.Router();


loginRouter.post('/', async (req: Request, res: Response) => {
    const {email, password} = req.body
    const token = newToken(email, password)
    if(token){
        
        res.status(200)
        res.json({token: token, status: 'ok'})
    }else
    res.status(401).json({error: 'Error al entrar'})
})
