// import express from 'express';
// import rateLimit from 'express-rate-limit';
// import { register, signIn } from '../controllers/authController.js'; // Ensure this import is correct
// // import { rateLimit } from 'express-rate-limit';
// // const rateLimit = require('express-rate-limit');



// // ip rate limit
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, //limit each IP to 100 requests per `window` (here, per 15 minutes)
//     standardHeaders: true, //Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// const router = express.Router();

// // register routes
// router.post("/register", limiter, register);
// router.post("/login", signIn);

// export default router;

// http://localhost:3001/api-v1/auth/register

// import express from 'express';
// import rateLimit from 'express-rate-limit';
// import { register, signIn } from '../controllers/authController.js';

// // IP rate limiter to prevent abuse
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // Limit each IP to 100 requests per window (15 minutes)
//     standardHeaders: true,
//     legacyHeaders: false,
// });
// const router = express.Router();

// // Add a log to check if the request is reaching the '/register' route
// router.post("/register", (req, res, next) =>{
//     console.log("POST /register request received");  // This log will show in the server console
//     next(); // Pass control to the next middleware (limiter) and route handler
// }, limiter, register);

// // Register route
// router.post("/register", limiter, register);
// // Login route
// router.post("/login", signIn);

// export default router;

import express from 'express';
import rateLimit from 'express-rate-limit';
import { register, signIn } from '../controllers/authController.js';

const router = express.Router();

// Rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window (15 minutes)
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable X-RateLimit-* headers
});

// Register route
router.post("/register", limiter, register);

// Login route
router.post("/login", limiter, signIn);  // Ensure this line exists

export default router;

