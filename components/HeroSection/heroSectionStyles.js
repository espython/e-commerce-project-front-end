import Styled from 'styled-components';

export const HeroSectionWrapper = Styled.div`

padding:0 !important;

.carousel {
  height: 76rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: background-image 1s ease-in-out;
  .hero-text{
    
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    h1{
      width:58rem;
      font-size:4.8rem;
      text-transform: uppercase;
    }
  }
}

.round-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  height: 4rem;
  width: 4rem;
  border: none;
  border-radius: 50%;
  font-size: 2.5rem;
  background-color: #eeeeee;
  margin: 1rem;
}

.round-btn:hover {
  cursor: pointer;
}


`;
