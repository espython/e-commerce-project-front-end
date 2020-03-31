import { useState, useEffect } from 'react';

import SignupComp from './SignupComp';
import SignInComp from './SignInComp';

export default function Register({ show, setShow }) {
  const [signup, setSignUp] = useState(true);

  return (
    <>
      {signup ? (
        <SignupComp show={show} setSignUp={setSignUp} setShow={setShow} />
      ) : (
        <SignInComp show={show} setShow={setShow} />
      )}
    </>
  );
}
