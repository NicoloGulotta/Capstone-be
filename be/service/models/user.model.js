import mongoose, { Schema, model } from "mongoose";
// import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
                },
                message: (props) => `${props.value} non è una email valida!`,
            },
        },
        dataDiNascita: {
            type: Date,
            required: false,
        },
        avatar: {
            type: String,
            required: false,
            default: "https://lh3.googleusercontent.com/a/ACg8ocJZHSdTAcUUmJ1_S2PlZFLGXFz8Wu6pwZ-gGhVJG0m0fZJgO-xu=s96-c",
        },
        password: {
            type: String,
            required: false,
            select: false, // Non includere la password nelle query di default
        },
        googleId: {
            type: String,
            required: false,
            unique: true,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        role: {
            type: String,
            enum: ["user", "moderator", "admin"],
            default: "user",
        },
        appointments: [{
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }]
    },
    {
        collection: "users",
        timestamps: true,
    }
);

// // Middleware pre-save per hashare la password
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next(); // Se la password non è stata modificata, salta l'hashing
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

export default model("User", userSchema);

