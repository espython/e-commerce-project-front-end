import React from 'react';
import Home from '../components/Home';
import User from '../components/User';
import Router from 'next/router';

const HomePage = () => (
  <User>
    {data => {
      if (data && data.user) {
        return <Home isLoggedIn={data} />;
      } else {
        Router.push('/');
        return null;
      }
    }}
  </User>
);

export default HomePage;
