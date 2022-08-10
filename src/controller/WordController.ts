import { Request, Response } from 'express';
import Message from "../core/entities/Message"
import ApiError from "../controller/ApiError"
import ApiResponse from "../controller/ApiResponse"
import CountClosedCharsByWord from '../core/services/CountClosedCharsByWord';
import CharClosedLocalRepository from '../repositories/local/CharClosedLocalRepository';
import NotValidData from '../core/exceptions/NotValidData';

const charClosedLocalRepository = new CharClosedLocalRepository();
const countClosedCharsByWord = new CountClosedCharsByWord(charClosedLocalRepository);

async function analyzeWord(req: Request, res: Response) {
  const { data } = req.body;
  const iMessage = new Message(data);

  try {
    iMessage.validateData();
    const closedChars: any = countClosedCharsByWord.countChars(data);
    return res.json(new ApiResponse(closedChars));
  } catch (e) {
    if (e instanceof NotValidData) {
      return res.status(400).json(new ApiError(e.message, data));
    }
    return res.status(500).json(new ApiError("internal server error", data));
  }
}

export { analyzeWord };
