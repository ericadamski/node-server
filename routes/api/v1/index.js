import { Router } from 'express';

import people from './people';
import tokens from './tokens';

const router = Router();
const _protected = Router();

_protected.use(async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization)
        return res.status(403).json(error('Forbidden'));

    const token = authorization.split(' ')[0];

    if (!token)
        res.status(403).json(error('Forbidden'));

    const authorized = await Authenticate.verify(token);

    console.log(authorized);
});

_protected.use('/people', people);
router.use('/tokens', tokens);

export default router;
export const v1Protected = _protected;
