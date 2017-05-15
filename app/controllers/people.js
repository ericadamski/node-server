import { Person } from '../models';
import { Authenticate } from '../services';

export default class PeopleController {
    static index() {
        return Person.fetchAll();
    }

    static show(id) {
        return Person.find(id);
    }

    static update(id, data) {
        return Person.find(id)
            .then(person => {
                if (!person) return false

                return person.save(data, { patch: true });
            });
    }

    static create(data) {
        const { password, ...model } = data;
        if (password) {
            return Authenticate.hash(password)
                .then(password => {
                    const person = new Person({ password, ...model });

                    return person.save();
                });
        }

        return Promise.reject();
    }

    static destroy(id) {

    }
}
