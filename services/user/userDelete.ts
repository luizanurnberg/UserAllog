import { Request, Response } from 'express';
import { ERequestStatus } from '../../enums/enums';
import { redisDeleteUser } from '../redis/redisDeleteUser';
import { redisGetUser } from '../redis/redisGetUser';
import { EUS } from '../../exceptions/EUS/userExceptions';
import { EAPI } from '../../exceptions/EAPI/apiExceptions';

class userDelete {
    async deleteUser(request: Request, response: Response) {
        try {
            const userId: string = request.params.id;
            const getUser = new redisGetUser();
            const userExists = await getUser.findUser(userId);
            if (userExists == null || !userId) {
                return response.status(ERequestStatus.NOT_FOUND).json(
                    EUS.invalidUserException()
                );
            }

            const deletedUser = new redisDeleteUser();
            await deletedUser.removeUser(userId);
            return response.status(ERequestStatus.SUCCESS).json(
                { msg: 'Usuário removido com sucesso!' }
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
    userDelete
}