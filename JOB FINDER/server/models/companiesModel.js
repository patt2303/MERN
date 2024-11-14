import mongoose, { Schema } from "mongoose";
import validator from 'validator';
// import SomeModule from './SomeModule';
import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken'

const companySchema = new Schema({
    name: {
        type: String,
        required: [true, "Company Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be atleast"],
        select: true,
    },
    conatact: {type: String},
    location: {type: String},
    about: {type: String},
    profileUrl: {type: String},
    jobPosts: [{type: Schema.Types.ObjectId, ref: "Jobs"}]
});

// 

companySchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

companySchema.methods.comparePassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
};

companySchema.methods.createJWT = async function () {
    return JWT.sign(
        { userId: this._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" }
    );
};

const Companies = mongoose.model("Companies", companySchema);

export default Companies;