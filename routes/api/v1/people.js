import { Router } from 'express';

import { PeopleController } from '../../../app/controllers';

const router = Router();

router.get('/', async (req, res) => {
    const people = await PeopleController.index();
    res.status(200).json(people);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const person = await PeopleController.show(id);

    if (!person) {
        res.status(404).json({ message: `Person with ID ${id}, cannot be found.`, errors: [] });
    } else {
        res.status(200).json(person);
    }
});

export default router;
