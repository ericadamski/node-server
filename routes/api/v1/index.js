import { Router } from 'express';

import passport from 'passport';

import { Authenticate } from '../../../app/services';

import people from './people';
import tokens from './tokens';

const router = Router();

router.use('/people', passport.authenticate('bearer', { session: false }), people);
router.use('/tokens', tokens);

export default router;
