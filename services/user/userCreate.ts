import { redisInsertUser } from "../redis/redisInsertUser";
import { Request, Response } from 'express';
import { ERequestStatus } from "../../enums/enums";
import { v4 as uuidv4 } from 'uuid';
import { EUS } from "../../exceptions/EUS/userExceptions";
import { EAPI } from "../../exceptions/EAPI/apiExceptions";

class userCreate {
    async createUser(request: Request, response: Response) {
        try {
            const userName: string = request.body.name;
            const userAge: number = request.body.age;
            if (!userName || userName == " " || userName == null || !userAge || userAge == null) {
                return response.status(ERequestStatus.BAD_REQUEST).json(
                    EUS.emptyFieldException()
                );
            }

            const newUser = new redisInsertUser();
            const userId = uuidv4();
            await newUser.saveUser(userId, userName, userAge);
            return response.status(ERequestStatus.SUCCESS).json(
                { msg: 'Usuário inserido com sucesso!', id: `${userId}` }
            );
        } catch (error) {
            console.log(error);
            return response.status(ERequestStatus.BAD_REQUEST).json(
                EAPI.errorFromSystemException()
            );
        }
    }
}

export {
    userCreate
}