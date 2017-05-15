import { Person } from '../models';
import { Authenticate } from '../services';
import { error } from '../utils';

export default class PeopleController {
    static async index(req, res) {
        const people = await Person.fetchAll();
        return res.status(200).json(people);
    }

    static async show(req, res) {
        const { id } = req.params;
        const person = await Person.find(id);
        if (person) {
            return res.status(200).json(person);
        } else {
            return res.status(404).json(error(`Person with ID ${id}, cannot be found.`));
        }
    }

    static async update(res, req) {
        const { id } = req.params;
        const { body } = req.body;
        const person = await Person.find(id);
        
        if (person) {
            const response = await person.save(body, { patch: true });
            if (response) return res.status(204).end();
        } else {
            return res.status(404).json(error(`Person with ID ${id}, cannot be found.`));
        }
    }

    static async create(req, res) {
        const { password, ...model } = req.body;
        
        if (password) {
            const pass = await Authenticate.hash(password);
            try {
                const person = await new Person({ password: pass, ...model }).save();
                return res.status(201).end();
            } catch (e) {
                return res.status(404).json(error(e.stack, e));
            }
        }
        
        return res.status(404).json(error(`Password is required`));
    }

    static async destroy(req, res) {
        const { id } = req.params;
        const person = await Person.find(req.params.id);
        
        if (person) {
            const response = await person.destroy();
            return res.status(204).end();
        } else {
            return res.status(404).json(error(`Person with ID ${id}, cannot be found.`))
        }
    }
}
