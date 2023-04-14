import { Request, Response } from 'express';
import { ERequestStatus } from '../../enums/enums';
import { redisGetUser } from '../redis/redisGetUser';
import { EUS } from '../../exceptions/EUS/userExceptions';
import { EAPI } from '../../exceptions/EAPI/apiExceptions';

class userGetById {
    async getUserById(request: Request, response: Response) {
        try {
            const userId = request.params.id;
            const getUser = new redisGetUser();
            const userExists = await getUser.findUser(userId);
            if (userExists == null || !userId) {
                return response.status(ERequestStatus.NOT_FOUND).json(
                    EUS.gettingIdException()
                );
            }

            return response.status(ERequestStatus.SUCCESS).json(
                JSON.parse(userExists)
            );
        } catch (error) {
            console.log(error);
            return response.status(ERequestStatus.BAD_REQUEST).json(EAPI.errorFromSystemException());
        }
    }

}

export {
    userGetById
}