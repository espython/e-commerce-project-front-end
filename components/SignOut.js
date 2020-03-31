import { Mutation } from '@apollo/react-components';
import gql from 'graphql-tag';
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';
import Router from 'next/router';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    logout {
      message
    }
  }
`;

const Signout = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {(logout, { client }) => (
      <LogOutBtn
        onClick={async () => {
          const { data } = await logout();
          client.cache.reset();
          if (data.logout.message) {
            Router.push('/');
          }
          console.log('Message', data.logout.message);
        }}
      >
        <p className="mx-2 user-name">{props.name}</p>
        <AiOutlineLogout className="logout-icon" />
      </LogOutBtn>
    )}
  </Mutation>
);

const LogOutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  :hover {
    color: ${({ theme }) => theme.orange};
  }
  .user-name {
    font-size: 2rem;
    text-transform: capitalize;
  }
  .logout-icon {
    font-size: 2.8rem;
    cursor: pointer;
  }
`;

export default Signout;
