import { Router } from 'express';

import Multer from 'multer';

import { error } from '../../../app/utils';
import { Authenticate } from '../../../app/services';
import { Person } from '../../../app/models';

const router = Router();
const form = Multer();

router.post('/', form.array(), async (req, res) => {
    const {
        email,
        password,
    } = req.body;

    if (!email || !password)
        return res.status(401).json(error('Unauthorized'));

    const person = await Person.where({ email }).fetch();

    if (!person)
        return res.status(401).json(error('Unauthorized', [ `No such person with email ${email}`]));

    const matched = await Authenticate.attempt(password, person);

    if (!matched)
        return res.status(401).json(error('Unauthorized', [ `Password is incorrect`]));

    const token = await Authenticate.authorize(person);

    res.json({ token });
});

export default router;
