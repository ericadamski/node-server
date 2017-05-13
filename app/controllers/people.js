import { Person } from '../models';

export default class PeopleController {
    static index() {
        return Person.fetchAll();
    }

    static show(id) {
        return Person.find(id);
    }
}
