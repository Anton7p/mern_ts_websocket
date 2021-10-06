import mongoose from "mongoose";
import {IUser} from '../config/interface'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"],
        trim: true,
        maxlength: [20, "Your name is up to 20 chars long."]
    },
    account: {
        type: String,
        required: [true, "Please add your email or phone"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add your password"],
        trim: true,

    },
    avatar: {
        type: String,
        default: 'https://e7.pngegg.com/pngimages/201/51/png-clipart-computer-icons-customer-service-user-others-miscellaneous-monochrome.png'

    },
    role: {
        type: String,
        default: 'user'//admin
    },
    type: {
        type: String,
        default: 'register'//fast
    }
}, {
    timestamps: true
})

export default mongoose.model<IUser>('user', userSchema)