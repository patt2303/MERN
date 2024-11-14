import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { register, signIn } from '../controllers/companiesController.js';
// routes/companiesRoutes.js
import { getCompanies, getCompanyById, getCompanyJobListing, getCompanyProfile, register, signIn, updateCompanyProfile } from '../controllers/companiesController.js';

import userAuth from "../middlewares/authMiddleware.js";


const router = express.Router();
// ip rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, //Limit each IP to 100 requests per `window`
    standardHeaders: true,
    legacyHeaders: false,
})

// REGISTER
router.post("/register", limiter, register);

// LOGIN
router.post("/login", limiter, signIn);

// GET DATA
router.post("/get-company-profile", userAuth, getCompanyProfile);
router.post("/get-company-joblisting", userAuth, getCompanyJobListing);
router.get("/", getCompanies);
router.get("/get-company/:id", getCompanyById);

// UPDATE DATA
router.put("/update-company", userAuth, updateCompanyProfile);

export default router;