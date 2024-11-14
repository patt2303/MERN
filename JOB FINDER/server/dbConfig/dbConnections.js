// import mongoose from "mongoose";

// const dbConnection = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//     });

//         console.log("Database Connected Successfully");
//     } catch (error) {
//         console.log("DB Error:" , error.message);
//     }
// }

// export default dbConnection;

// import mongoose from "mongoose";

// const dbConnection = async () => {
//     try {
//         const uri = process.env.MONGODB_URL; // Check that this is not undefined
//         if (!uri) {
//             throw new Error('MONGODB_URL is not defined in .env');
//         }

//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("Database Connected Successfully");
//     } catch (error) {
//         console.log("DB Error:", error.message);
//     }
// };

// export default dbConnection;


import mongoose from "mongoose";

// Async function to connect to the MongoDB database
const dbConnection = async () => {
    try {
        // Get the MongoDB URI from environment variables
        const uri = process.env.MONGODB_URL;

        // Check if the URI is defined
        if (!uri) {
            throw new Error('MONGODB_URL is not defined in .env');
        }

        // Attempt to connect to the database
        await mongoose.connect(uri, {
            useNewUrlParser: true,  // Backward compatibility
            useUnifiedTopology: true,  // Backward compatibility
        });

        console.log("Database Connected Successfully");

    } catch (error) {
        // Log the error message if the connection fails
        console.error("DB Connection Error:", error.message);
        process.exit(1);  // Exit the process if the DB connection fails
    }
};

// Graceful shutdown
mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

// Catch termination signals and close the MongoDB connection gracefully
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
});

export default dbConnection;
