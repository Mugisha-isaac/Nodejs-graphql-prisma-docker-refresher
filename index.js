const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./src/schema/schema');
const {resolvers} = require('./src/resolvers/resolvers');


const port = process.env.port || 3000

const server = new ApolloServer({resolvers,typeDefs})

server.listen({port},()=>{
    console.log(`server runs at: http://localhost:${port}`)
})