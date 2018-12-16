import  { gql } from 'apollo-boost'

export default gql`
  query PostQuery {
    post {
      id
      title
    }
  }
`