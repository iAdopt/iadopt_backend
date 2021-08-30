import { catchErrors } from '../middlewares/errorHandler';
import { Request, Response } from 'express';

export const initiate = catchErrors(async (req: Request, res: Response) => {});
export const postMessage = catchErrors(
  async (req: Request, res: Response) => {}
);
export const getRecentConversation = catchErrors(
  async (req: Request, res: Response) => {}
);
export const getConversationByRoomId = catchErrors(
  async (req: Request, res: Response) => {}
);
export const markConversationReadByRoomId = catchErrors(
  async (req: Request, res: Response) => {}
);
