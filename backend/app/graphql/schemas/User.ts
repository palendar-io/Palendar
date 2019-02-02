
import { buildSchema } from 'graphql';

const userSchema = buildSchema(`
    type User {
        _id: Int!
        firstName: String
        lastName: String
        email: String
        password: String
    }

    input UserInput {
        email: String!
        password: String!
    }
`);

module.exports = userSchema;