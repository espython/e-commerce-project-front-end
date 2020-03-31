import React from 'react';
import Router from 'next/router';

export default function Home(props) {
  // console.log('isLoggedIn', isLoggedI);
  if (props.isLoggedIn.user) {
    return (
      <div className="container">
        <h4>Home Page </h4>
        {/*<Items />*/}
      </div>
    );
  } else {
    Router.push('/');
    return null;
  }
}
