import { Router } from 'express';

import people from './people';

const router = Router();

router.use('/people', people);

export default router;
