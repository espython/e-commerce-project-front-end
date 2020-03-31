import styled from 'styled-components';

const SignInWrapper = styled.div`
  .modal {
    display: ${({ show }) => (!show ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(71, 78, 93, 0.8);
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: ${({ theme }) => theme.secondaryLight};
    /* margin: 5% auto 15% auto; 5% from the top, 15% from the bottom and centered */
    padding: 1rem 2rem 2rem 2rem;
    border: 1px solid #888;
    max-width: 60%;
     /* Could be more or less, depending on screen size */
  }
  /* input field */
  .form-control{
    height:5rem;
    font-size:1.8rem;
  }
  /* submit button */
  .signup-btn {
    /* background-color: ${({ theme }) => theme.mainDark};
    color: ${({ theme }) => theme.secondaryLight}; */
    font-size: 1.8rem;
    margin-top: 1rem;
    width: 50%;
    height: 5rem;
  }
  /* facebook signIn btn button */
  .facebook-btn {
    /* color: ${({ theme }) => theme.secondaryDark}; */
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1.8rem;
    font-weight:bold;
    margin-top: 1rem;
    width: 50%;
    height: 5rem;
    .icon{
      font-size: 3rem;
      margin-right:1rem;
    }
  }

  .close-icon{
    font-size:3rem;
    cursor: pointer;
    margin-left:97%;
    :hover{
      color:${({ theme }) => theme.orange};
    }
  }
`;

export default SignInWrapper;
