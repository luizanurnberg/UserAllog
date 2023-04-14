import { Router, Request, Response } from 'express';
import { userCreate } from '../services/user/userCreate';
import { userDelete } from '../services/user/userDelete';
import { userEdit } from '../services/user/userEdit';
import { userGetById } from '../services/user/userGetById';

const router = Router();
router.post('/api/people/insert', new userCreate().createUser);
router.put('/api/people/update', new userEdit().editUser);
router.get('/api/people/getById/:id', new userGetById().getUserById);
router.delete('/api/people/delete/:id', new userDelete().deleteUser);

export {
    router
}