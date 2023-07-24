import express, { Router } from 'express';
import signup from './signupRoute';
import login from './loginRoute';
import cacheMiddleware from '../middleware/cacheMiddleware';


const router: Router = express.Router();

router.use('/ig',signup);

router.use(cacheMiddleware)

 router.use('/ig',login );


export default router;