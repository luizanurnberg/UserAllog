import { Request, Response } from 'express';
import { ERequestStatus } from '../../enums/enums';
import { redisGetUser } from '../redis/redisGetUser';
import { redisUpdateUser } from '../redis/redisUpdateUser';
import { EAPI } from '../../exceptions/EAPI/apiExceptions';
import { EUS } from '../../exceptions/EUS/userExceptions';

class userEdit {
    async editUser(request: Request, response: Response) {
        try {
            const userId: string = request.body.id;
            const getUser = new redisGetUser();
            const userExists = await getUser.findUser(userId);
            if (userExists == null || !userId) {
                return response.status(ERequestStatus.NOT_FOUND).json(
                    EUS.invalidUserException()
                );
            }

            const userName: string = request.body.name;
            const userAge: number = request.body.age;
            if (!userName || userName == " " || userName == null && !userAge || userAge == null) {
                return response.status(ERequestStatus.BAD_REQUEST).json(
                    EUS.emptyFieldException()
                );
            }

            const editedUser = new redisUpdateUser();
            await editedUser.editUser(userId, userName, userAge);
            return response.status(ERequestStatus.SUCCESS).json(
                { msg: 'Usuário editado com sucesso!', user: `${userName}, ${userAge}` }
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
    userEdit
}