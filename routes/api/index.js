import { Router } from 'express';

import v1, { v1Protected } from './v1';

const router = Router();

router.use('/v1', v1);
router.use('/v1', v1Protected);

export default router;
