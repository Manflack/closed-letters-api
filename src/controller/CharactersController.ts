import { Request, Response } from 'express';

import ApiError from "./response/ApiError"
import ApiResponse from "./response/ApiResponse"

import Character from '../core/entities/Character';

import SaveCharInteraction from '../core/services/SaveCharInteraction';
import ResetExtendedDatabase from '../core/services/ResetExtendedDatabase';

import CharClosedLocalRepository from '../repositories/local/CharClosedLocalRepository';

import NotValidData from '../core/exceptions/NotValidData';

const charClosedLocalRepository = CharClosedLocalRepository.getInstance();
const saveCharInteraction = new SaveCharInteraction(charClosedLocalRepository);
const resetExtendedDatabase = new ResetExtendedDatabase(charClosedLocalRepository);

async function saveNewCharacterToExtendendDatabase(req: Request, res: Response) {
    const { data } = req.body;

    const characters: Array<Character> = data;

    try {
        saveCharInteraction.execute(characters);
        return res.json(new ApiResponse("ok"));
    } catch (e) {
        if (e instanceof NotValidData) {
            return res.status(400).json(new ApiError(e.message, data));
        }
        console.log(e)
        return res.status(500).json(new ApiError("internal server error", data));
    }


}

async function resetDatabase(_req: Request, res: Response) {
    resetExtendedDatabase.execute();
    return res.json(new ApiResponse("ok"));
}

export { saveNewCharacterToExtendendDatabase, resetDatabase };