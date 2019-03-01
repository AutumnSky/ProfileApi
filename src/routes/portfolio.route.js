import express from 'express';
import * as portfolioController from '../controllers/portfolio.controller';

const router = express.Router();

router.get('/', portfolioController.getPortfolio);

export default router;
