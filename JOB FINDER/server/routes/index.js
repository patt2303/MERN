// import express from 'express';
// import authRoute from "./authRoutes.js";


// const router = express.Router()

// const path = "/api-v1";

// router.use(`${path}/auth`, authRoute); //api-v1/auth/

// export default router;

// import express from 'express';
// import authRoute from './authRoutes.js';
// import userRoute from "./userRoutes.js"

// const router = express.Router();

// const path = "/api-v1";

// // Mount authRoute under '/api-v1/auth'
// // router.use('/auth', authRoute); 
// router.use(`${path}/auth`, authRoute); // Now this will be accessible as /api-v1/auth/register and /api-v1/auth/login
// router.use(`${path}/users`, userRoute);

// export default router;

import express from 'express';
import authRoute from './authRoutes.js';
import userRoute from './userRoutes.js';
import companyRoute from './companiesRoutes.js';
import jobRoute from "./jobsRoutes.js";

const router = express.Router();

// Define the API base path
const apiPrefix = "/api-v1";

// Mount the authRoute and userRoute under the appropriate path
router.use(`${apiPrefix}/auth`, authRoute);  // This will make it accessible as /api-v1/auth/register and /api-v1/auth/login
router.use(`${apiPrefix}/users`, userRoute); // This will make it accessible as /api-v1/users/{other-routes}
router.use(`${apiPrefix}/companies`, companyRoute);
router.use(`${apiPrefix}/jobs`, jobRoute);

export default router;

