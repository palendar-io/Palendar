import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model("User", UserSchema);