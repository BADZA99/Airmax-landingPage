import React from 'react'
import styled from "styled-components";
import facebook from '../assets/facebook.png';
import instagram from '../assets/insta.png';
import twitter from '../assets/twitter logo.png';

const Styledbloc = styled.div`
  //   border: 0.0625rem solid white;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //   transform: rotate(90deg);
  transform: rotate(-90deg);
  left: 1.21rem;
  top: 85%;
  padding: 0.5rem;
  width: 5rem;

  @media (max-width: 320px) {
    // placer plus bas 
    top: 92%;


  }
`;
const Socials = () => {
  return (
    <Styledbloc>
        <img src={facebook} alt="Facebook" className='socialIcon'  />
        <img src={instagram} alt="Instagram"  className='socialIcon'/>
        <img src={twitter} alt="Twitter" className='socialIcon'/>
    </Styledbloc>
  )
}

export default Socials
