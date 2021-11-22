const {gql} = require('apollo-server');
const typeDefs = gql`
type Student{
    id:ID!
    email:String!
    fullname:String!
    dept:String!
    enrolled:Boolean
}

type Query{
    enrollment:[Student!]
    students:[Student!]!
    student(id:ID!): Student
}

type Mutation{
      registerStudent(email:String!, fullname:String!,dept:String):Student!
      enroll(id:ID!):Student
}`

module.exports ={
    typeDefs
}