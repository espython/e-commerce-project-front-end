import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  .modal {
    display: ${({ loading }) => (!loading ? 'none' : 'flex')};

    justify-content: center;
    align-items: center;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(71, 78, 93, 0.6);
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: ${({ theme }) => theme.secondaryLight};
    /* margin: 5% auto 15% auto; 5% from the top, 15% from the bottom and centered */
    padding: 1rem 2rem 2rem 2rem;
    border: 1px solid #888;
    max-width: 65%; /* Could be more or less, depending on screen size */
  }
  .loading {
    border: 6px solid ${({ theme }) => theme.secondaryDark};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.kashmerColor};
    border-left-color: ${({ theme }) => theme.kashmerColor};
    animation: spin 1s infinite ease;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
