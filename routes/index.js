import { Router } from 'express';

import { error } from '../app/utils';
import { Authenticate } from '../app/services';

const router = Router();

import api from './api';

router.use('/api', api);

export default router;
