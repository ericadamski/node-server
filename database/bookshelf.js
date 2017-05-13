import dotenv from 'dotenv';

dotenv.load();

import Knex from 'knex';
import Bookshelf from 'bookshelf';

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


export const DB = _db;
