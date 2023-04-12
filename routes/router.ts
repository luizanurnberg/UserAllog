import { Router, Request, Response } from 'express';

const router = Router();

router.post('/api/people/insert');
router.put('api/people/update');
router.get('api/people/getById/:id');
router.get('api/people/list');
router.delete('api/people/delete/:id');

export {
    router
}