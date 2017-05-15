import { Router } from 'express';

import Multer from 'multer';

import { PeopleController } from '../../../app/controllers';
import { error } from '../../../app/utils';

const form = Multer();
const router = Router();

router
    .get('/', async (req, res) => {
        const people = await PeopleController.index();
        res.status(200).json(people);
    })
    .post('/', form.array(), async (req, res) => {
        const person = await PeopleController.create(req.body);
        res.status(201).end();
    });

router
    .get('/:id', async (req, res) => {
        const { id } = req.params;

        const person = await PeopleController.show(id);

        if (!person) {
            res.status(404).json(error(`Person with ID ${id}, cannot be found.`));
        } else {
            res.status(200).json(person);
        }
    })
    .patch('/:id', form.array(), async (req, res) => {
        const { body } = req;
        const { id } = req.params;

        const person = await PeopleController.update(id, body);

        if (!person) {
            res.status(404).json(error(`Person with ID ${id}, cannot be found.`));
        } else {
            res.status(204).end();
        }
    });

export default router;
