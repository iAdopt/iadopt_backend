import { Request, Response } from 'express';
import db from '../db';

export function all(req: Request, res: Response, next: (error: Error) => void): void {
  db.query('SELECT * FROM animals', [], (error, result) => {
    if (error) {
      return next(error);
    }
    res.send(result.rows);
    return null;
  });
}

export function byId(req: Request, res: Response): void {
  res.send('NOT IMPLEMENTED: Author list');
}

export function bySpecie(req: Request, res: Response): void {
  res.send('NOT IMPLEMENTED: Author list');
}
