import bcrypt from 'bcryptjs';
import { User } from '../../models/user';

module.exports = {
    createUser: async args =>{
        try{
            const existingUser = await User.findOne({email: args.userInput.email})
            if (existingUser) {
                throw new Error('User already exists.')
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
            .then(hashedPassword => {
                const newUser = new User({
                    email: args.userInput.email,
                    password: hashPassword
                })
                return newUser.save()
            })
            .then(result => {
                return {...result._doc, _id: result._id}
            })
            .catch(err => {
                throw err
            })
        }
    }
}