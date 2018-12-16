const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    feed: (parent, args, context) => {
      return context.prisma.posts({ where: { published: true } })
    },
    drafts: (parent, args, context) => {
      return context.prisma.posts({ where: { published: false } })
    },
    post: (parent, { id }, context) => {
      return context.prisma.post({ id })
    },
    // user: (parent, args, context) => {
    //   return context.prisma.user({ firstName })
    // },
    workout: (parent, {name, id}, context) => {
      return context.prisma.workout({ name, id })
    },
  },
  Mutation: {
    // createUser(parent, { firstName }, context) {
    //   return context.prisma.createUser({
    //     firstName,
    //   })
    // },
    createWorkout(parent, { name, id }, context) {
      return context.prisma.createWorkout({
        name,
        id
      })
    },
    createDraft(parent, { title, content }, context) {
      return context.prisma.createPost({
        title,
        content,
      })
    },
    deletePost(parent, { id }, context) {
      return context.prisma.deletePost({ id })
    },
    publish(parent, { id }, context) {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true },
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
