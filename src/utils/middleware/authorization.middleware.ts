import { NextFunction, Request, Response } from 'express';
import auth from '../config/authorization';
import jwt from 'jsonwebtoken';

export default async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = request.headers.authorization;

  if (!authorization) {
    throw new Error('Token não informado.');
  }

  const [, token] = authorization.split(' ');

  try {
    const decoded = await jwt.verify(token, auth.secret);

    // @ts-ignore-
    request.uid = decoded;

    return next();
  } catch (err) {
    throw new Error('Token inválido.');
  }
};
