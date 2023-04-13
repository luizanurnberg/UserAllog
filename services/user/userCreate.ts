import { redisInsertUser } from "../redis/redisInsertUser";
import { Request, Response } from 'express';
import { emptyFieldException } from "../../exceptions/user/emptyFieldException";
import { somethingWrongException } from "../../exceptions/api/somethingWrongException";
import { v4 as uuidv4 } from 'uuid';

class userCreate {
    async createUser(request: Request, response: Response) {
        try {
            const userName: string = request.body.name;
            const userAge: number = request.body.age;
            if (!userName || userName == " " || userName == null || !userAge || userAge == null) {
                return response.status(400).json(emptyFieldException());
            }

            const newUser = new redisInsertUser();
            const userId = uuidv4();
            await newUser.saveUser(userId, userName, userAge);
            return response.status(200).json({ msg: 'Usuário inserido com sucesso!', id: `${userId}` });
        } catch (error) {
            console.log(error);
            return response.status(400).json(somethingWrongException());
        }
    }
}

export {
    userCreate
}