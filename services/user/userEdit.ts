import { Request, Response } from 'express';
import { somethingWrongException } from "../../exceptions/api/somethingWrongException";
import { redisGetUser } from '../redis/redisGetUser';
import { redisUpdateUser } from '../redis/redisUpdateUser';
import { editingException } from '../../exceptions/user/editingException';
import { invalidUserException } from '../../exceptions/user/invalidUserException';

class userEdit {
    async editUser(request: Request, response: Response) {
        try {
            const userId: string = request.body.id;
            const getUser = new redisGetUser();
            const userExists = await getUser.findUser(userId);
            if (userExists == null || !userId) {
                return response.status(401).json(invalidUserException());
            }

            const userName: string = request.body.name;
            const userAge: number = request.body.age;
            if (!userName || userName == " " || userName == null && !userAge || userAge == null) {
                return response.status(400).json(editingException());
            }

            const editedUser = new redisUpdateUser();
            await editedUser.editUser(userId, userName, userAge);
            return response.status(200).json({ msg: 'Usuário editado com sucesso!', user: `${userName}, ${userAge}` },);
        } catch (error) {
            console.log(error);
            return response.status(400).json(somethingWrongException());
        }
    }
}

export {
    userEdit
}