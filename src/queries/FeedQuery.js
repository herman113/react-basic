import  { gql } from 'apollo-boost'

export default gql`
  query FeedQuery {
    feed {
      id
      content
      title
      published
    }
  }
`