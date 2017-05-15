import { DB } from '../../database';

export default class Person extends DB.Model {
    get softDelete() {
        return true;
    }

    get tableName() {
        return 'people';
    }

    static find(id) {
        if (!id) return Promise.reject(`${id} is invalid.`);

        return this.where({ id }).fetch();
    }
}
