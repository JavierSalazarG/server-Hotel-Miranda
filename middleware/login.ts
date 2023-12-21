import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();
interface AuthenticatedRequest extends Request {
  perfil?: any;
}
const KEY_ENV = process.env.JWT_SECRET;

export const newToken = (email: string, password: string) => {
  if (email === 'admin@admin.com' && password === 'admin') {
    if (KEY_ENV) return jwt.sign({ email }, KEY_ENV, { expiresIn: '24h' });
    throw new Error('Error en key');
  }
  return null;
};

export const loginAuthenticationMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers["authorization"];
  if (!auth)
    return res
      .status(401)
      .json({ error: true, message: 'la autorización no está en el encabezado' });
  const token = auth.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No autorizado' });
  } else {
    if (KEY_ENV) {
      try {
        const perfil = await jwt.verify(token, KEY_ENV);
        req.perfil = perfil;
        next();
      } catch (err) {
        return res.status(403).json({ error: 'Error en el token' });
      }
    }
  }
};