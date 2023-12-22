import express, { Request, Response, response } from "express";
export const loginRouter = express.Router();
import jwt from 'jsonwebtoken';
const KEY_ENV = process.env.JWT_SECRET;


loginRouter.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Faltan email o password en la solicitud' });
    }

    if (email === 'admin@admin.com' && password === 'admin') {
        try {
            const token = jwt.sign({ email }, KEY_ENV);
            return res.status(200).json({ token, status: 'ok' });
        } catch (error) {
         
            console.error('Error al generar el token:', error);
            return res.status(500).json({ error: 'Error interno al generar el token' });
        }
    }
    res.status(401).json({ error: 'Credenciales incorrectas' });
});