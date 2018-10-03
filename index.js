const { prisma } = require('./prisma/generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
    Query: {
        users(root, args, context) {
            return context.prisma.users()
        }
    },
    Mutation: {
        createUser(root, args, context) {
            return context.prisma.createUser(
                {
                    name: args.name,
                    email: args.email,
                    password: args.password
                }
            )
        },
        removeUser(root, args, context) {
            return context.prisma.deleteUser(
                {
                    id: args.id
                }
            )
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: { 
      prisma
    },
  })
  server.start(() => console.log('Server is running on http://localhost:4000'))

// const { prisma } = require('./prisma/generated/prisma-client')

// // A `main` function so that we can use async/await
// async function main() {

//   // Create a new user called `Alice`
//   const newUser = await prisma.createUser({ name: 'Alice' })
//   console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

//   // Read all users from the database and print them to the console
//   const allUsers = await prisma.users()
//   console.log(allUsers)

//   const user = await prisma
//     .user({ id: '__USER_ID__' })
// }

// main().catch(e => console.error(e))