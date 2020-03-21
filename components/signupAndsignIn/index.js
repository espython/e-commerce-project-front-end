import { useState, useEffect } from 'react';

import SignupComp from './SignupComp';
import SignInComp from './SignInComp';

// close signup modal
const closeModal = setShow => {
  const modal = document.getElementById('signupModal');
  console.log('modaaaaaaaaaaaaal', modal);
  window.onclick = event => {
    console.log('modaaaaaaaaaaaaal', event.target);
    if (event.target == modal) {
      modal.style.display = 'none';
      console.log('modaaaaaaaaaaaaal');
      setShow({ show: false, signup: true });
    }
  };
};

export default function Register() {
  const [show, setShow] = useState(true);
  const [signup, setSignUp] = useState(true);

  useEffect(() => {
    closeModal(setShow);
  });
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
