import { NextFunction, Request, Response } from 'express';
import auth from '../config/auth';
import jwt from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    throw new Error('Token não informado.');
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = await jwt.verify(token, auth.secret);

    // @ts-ignore-
    req.uid = decoded;

    return next();
  } catch (err) {
    throw new Error('Token inválido.');
  }
};
