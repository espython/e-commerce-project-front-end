import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Card } from '../common';

const All_ITEMS_QUERY = gql`
  query All_ITEMS_QUERY {
    info
  }
`;

export default class Items extends Component {
  render() {
    return (
      <div>
        <Query query={All_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error : {error.message}</p>;
            return data.items.map(item => {
              return <Card key={item.id} data={item} />;
            });
          }}
        </Query>
      </div>
    );
  }
}
