
import { buildSchema } from 'graphql';

const typeDefs = buildSchema(`
    type User {
        _id: Int!
        firstName: String
        lastName: String
        email: String
        password: String
    }
`);

module.exports = typeDefs;