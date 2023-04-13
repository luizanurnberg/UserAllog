import { Request, Response } from 'express';
import { somethingWrongException } from '../../exceptions/api/somethingWrongException';
import { invalidUserException } from '../../exceptions/user/invalidUserException';
import { redisDeleteUser } from '../redis/redisDeleteUser';
import { redisGetUser } from '../redis/redisGetUser';

class userDelete {
    async deleteUser(request: Request, response: Response) {
        try {
            const userId: string = request.params.id;
            const getUser = new redisGetUser();
            const userExists = await getUser.findUser(userId);
            if (userExists == null || !userId) {
                return response.status(401).json(invalidUserException());
            }

            const deletedUser = new redisDeleteUser();
            await deletedUser.removeUser(userId);
            return response.status(200).json({ msg: 'Usuário removido com sucesso!' });
        } catch (error) {
            console.log(error);
            return response.status(400).json(somethingWrongException());
        }
    }
}

export {
    userDelete
}