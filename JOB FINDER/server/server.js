// import express from 'express';
// import dotenv from "dotenv";
// import cors from"cors";
// import morgan from "morgan";
// // import bodyParser from 'bodyParser';
// import router from './routes/authRoutes.js';

// import xss from 'xss-clean'
// import mongoSanitize from 'express-mongo-sanitize'
// import dbConnection from './dbConfig/dbConnections.js'

// dotenv.config()

// const app = express()

// const PORT = process.env.PORT || 3001;

// // MONGODB CONNECTION

// dbConnection();

// // middlenames
// app.use(cors());
// app.use(xss());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: true}));
// app.use(mongoSanitize());
// app.use(express.json({limit: "10mb" }));
// app.use(express.urlencoded({ extended: true}));

// app.use(morgan("dev"));

// app.use("/api-v1",router);

// app.listen(PORT, ()=>{
//     console.log(`Dev Server running on port: ${PORT}`);
// });

// import express from 'express';
// import dotenv from "dotenv";
// import cors from "cors";
// import morgan from "morgan";
// import router from './routes/index.js'; // Import the router from routes/index.js

// import xss from 'xss-clean';
// import mongoSanitize from 'express-mongo-sanitize';
// import dbConnection from './dbConfig/dbConnections.js';
// import errorMiddleware from './middleware/errorMiddleware.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // MONGODB CONNECTION
// dbConnection();

// // Middlewares
// app.use(cors());
// app.use(xss());
// app.use(mongoSanitize());
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan("dev"));

// // Mount routes from index.js under '/api-v1'
// app.use("/api-v1", router); // This should map to '/api-v1/auth/register' and '/api-v1/auth/login'

// // error middleware
// app.use(errorMiddleware);

// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
// });


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index.js';  // Import router to handle your routes

import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import dbConnection from './dbConfig/dbConnections.js';  // Ensure this connects to your MongoDB
import errorMiddleware from './middlewares/errorMiddleware.js';  // Custom error handling middleware

dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Establish MongoDB connection
dbConnection();

// Middleware setup
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(xss());  // Prevent Cross-Site Scripting (XSS)
app.use(mongoSanitize());  // Prevent MongoDB Operator Injection
app.use(express.json({ limit: "10mb" }));  // JSON body parser with limit
app.use(express.urlencoded({ extended: true }));  // URL-encoded body parser

app.use(morgan("dev"));  // HTTP request logger middleware (logs all requests)

// Use the router for handling routes under '/api-v1'
app.use("/api-v1", router);  // This will map to '/api-v1/auth/register' and '/api-v1/auth/login'

// Error handling middleware should be placed after all routes
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
