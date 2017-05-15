import dotenv from 'dotenv';

dotenv.load();

import Knex from 'knex';
import Bookshelf from 'bookshelf';

/* plugins */
import paranoia from 'bookshelf-paranoia';
/***********/

const _db = Bookshelf(Knex({
    debug: process.env.NODE_ENV === 'debug',
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        charset: 'utf8',
    },
}));

_db.plugin(paranoia);

export const DB = _db;
