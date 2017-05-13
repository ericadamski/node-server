import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import moment from 'moment';

export class Authenticate {
    static authorize(person) {
        return JWT.sign({
            exp: moment().add(1, 'hour').unix(),
            ...person.attributes,
        }, process.env.SECRET);
    }

    static verify(token) {
        return new Promise((resolve, reject) =>
            JWT.verify(token, process.env.SECRET, (err, decoded) => {
                if (err) return reject(err);
                resolve(decoded);
            }));
    }

    static attempt(password, person) {
        return bcrypt.compare(password, person.attributes.password);
    }

    static hash(password) {
        return bcrypt.hash(password, parseInt(process.env.SALT));
    }
}
