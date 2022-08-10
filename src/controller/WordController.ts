import { Request, Response } from 'express';

import CountClosedCharsByWord from '../core/services/CountClosedCharsByWord';
import CharClosedLocalRepository from '../repositories/local/CharClosedLocalRepository';

const charClosedLocalRepository = new CharClosedLocalRepository();
const countClosedCharsByWord = new CountClosedCharsByWord(charClosedLocalRepository);

async function analyzeWord(req: Request, res: Response) {
  const { message } = req.body;

  if (!message)
    return res.status(400).json({
      message: "Missing body data",
      type: "error",
      data: req.body
    });

  try {
    const closedChars: number = countClosedCharsByWord.countChars(message);
    return res.json({
      type: "success",
      data: {
        closedChars
      }
    })
  } catch (e) {
    return res.status(500).json({
      message: "Processing information error",
      type: "error",
      data: e
    });
  }
}

export {analyzeWord};
