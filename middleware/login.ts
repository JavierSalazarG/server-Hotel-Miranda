import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface AuthenticatedRequest extends Request {
  perfil?: any;
}

const KEY_ENV = process.env.JWT_SECRET;

export const loginAuthenticationMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res
      .status(401)
      .json({ error: true, message: 'La autorización no está en el encabezado' });
  }

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
        console.error('Error al verificar el token:', err);
        return res.status(403).json({ error: 'Error en el token' });
      }
    } else {
      console.error('La clave JWT no está configurada correctamente');
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};