import express from 'express';
import * as chatRoom from '../controllers/chatRoom.controller';

const apiRouter = express.Router();

apiRouter
  .get('/', chatRoom.getRecentConversation)
  .get('/:roomId', chatRoom.getConversationByRoomId)
  .post('/initiate', chatRoom.initiate)
  .post('/:roomId/message', chatRoom.postMessage)
  .put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId);

export default apiRouter;
