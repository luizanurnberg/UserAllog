import { Request, Response } from 'express';
import { somethingWrongException } from '../../exceptions/api/somethingWrongException';
import { getIdException } from '../../exceptions/user/getIdException';
import { redisGetUser } from '../redis/redisGetUser';

class userGetById {
    async getUserById(request: Request, response: Response) {
        try {
            const userId = request.params.id;
            const getUser = new redisGetUser();
            const userExists = await getUser.findUser(userId);
            if (userExists == null || !userId) {
                return response.status(401).json(getIdException());
            }

            return response.status(200).json(JSON.parse(userExists));
        } catch (error) {
            console.log(error);
            return response.status(400).json(somethingWrongException());
        }
    }

}

export {
    userGetById
}