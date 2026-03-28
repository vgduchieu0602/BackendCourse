import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address."]
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema)

export default User;
=======
    name:
})
>>>>>>> f90977b707209d8ef6143583a2bfed9fbfca31d7
