import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import SpinnerComp from './spinner-comp/SpinnerComp';

const CURRENT_USER_QUERY = gql`
  query {
    user {
      id
      email
      name
      # permissions
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <SpinnerComp loading={loading} />;
      if (error) return `Error! ${error.message}`;

      return <>{props.children(data)}</>;
    }}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
export { CURRENT_USER_QUERY };
