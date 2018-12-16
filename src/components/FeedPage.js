import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import FeedQuery from '../queries/FeedQuery'

class FeedPage extends Component {
  renderList() {
    return this.props.data.feed.map((a) => {
      return <li>{a.id}</li>
    });
  }

  render() {
    const { data } = this.props;
    console.log(data.feed);
    if (this.props.loading) {
      return <div>Loading ...</div>
    }
    return (
      <div>
        <h1>Feed</h1>
        {/* <ul>{this.renderList()}</ul> */}
      </div>
    )
  }
}

export default graphql(FeedQuery)(FeedPage);
