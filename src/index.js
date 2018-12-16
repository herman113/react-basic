import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import FeedPage from './components/FeedPage'
import 'tachyons'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={FeedPage} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
  )
