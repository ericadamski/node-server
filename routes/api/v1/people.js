import { Router } from 'express';

import Multer from 'multer';

import { PeopleController } from '../../../app/controllers';
import { error } from '../../../app/utils';

const form = Multer();
const router = Router();

router
    .get('/', PeopleController.index)
    .post('/', form.array(), PeopleController.create);

router
    .get('/:id', PeopleController.show)
    .patch('/:id', form.array(), PeopleController.update)
    .delete('/:id', PeopleController.destroy);

export default router;
