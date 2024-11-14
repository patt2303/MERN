// ERROR MIDDLEWARE | NEXT FUNCTION

// const errorMiddleware = (err, req, res, next) => {
//     const defaultError = {
//         statusCode: 404,
//         success: "failed",
//         message: err,
//     };

//     if(err.name === "ValidationError"){
//         defaultError.statusCode = 404

//         default.message = Object.values(err, errors).map((el)=> 
//             el.message
//         ).join(",");
//     }

//     //  duplicate error
//     if(err.code && err.code === 11000) {
//         defaultError.statusCode = 404
//     defaultError.message = `${Object.values(err.keyValue)} field has to be unique`;
//     }

//     res.status(defaultError.statusCode).json({
//         success:defaultError.success,
//         message: defaultError.message,
//     });
// };

// export default errorMiddleware;

const errorMiddleware = (err, req, res, next) => {
    // Default error object
    const defaultError = {
        statusCode: 500, // Default to 500 Internal Server Error
        success: "failed",
        message: err.message || "Something went wrong", // Fallback to generic error message
    };

    // Handle Mongoose Validation Errors
    if (err.name === "ValidationError") {
        defaultError.statusCode = 400; // Bad Request for validation errors
        defaultError.message = Object.values(err.errors) // Correct access to errors
            .map((el) => el.message) // Collect error messages
            .join(", ");
    }

    // Handle MongoDB Duplicate Key Errors (e.g., duplicate email)
    if (err.code && err.code === 11000) {
        defaultError.statusCode = 409; // Conflict for duplicate errors
        defaultError.message = `${Object.values(err.keyValue).join(", ")} field must be unique`;
    }

    // Send response
    res.status(defaultError.statusCode).json({
        success: defaultError.success,
        message: defaultError.message,
    });
};

export default errorMiddleware;
