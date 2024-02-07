import React from 'react'
import styled from "styled-components";
import allColors from "../utils/allColors";
import NikeLogo from '../assets/Nike logo.png';
import Cart from '../assets/Cart.png';
import Search from '../assets/Search.png';
// gsap
import { gsap } from "gsap";
import { useEffect } from 'react';

const Nav = styled.nav`
position: absolute;
width: 70.625rem;
height: 2.5rem;
top: 1.75rem;
left: 10.5rem;
border-radius: 0.625rem;
background-color: transparent;
// border:0.0625rem solid white;
display:flex;
justify-content: space-between;
align-items: center;
border-radius:10px;
`;

const StyledUl = styled.ul`
//   border: 0.0625rem solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  list-style: none;
  margin: 0 auto;
  z-index:11;
  li {
    color: ${allColors.blanc};
    font-family: "Futura Bold", sans-serif;
    font-size: 1.25rem;
    line-height: 1.465rem;
    font-weight: bold;
    cursor: pointer;
    transition:0.3s;
    
    &:hover {
      color: ${allColors.orange};
      // text-decoration:underline;
    }
  }
`;

const IconeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 width: 7%;
`;



const NavBar = () => {
  // animation la navbar apparait de haut en bas
  useEffect(()=>{

    gsap.from(".navbar", {
      y: -100,
      duration: 2,
      ease: "power4.out",
    });
  
    // l'arrivee gsap.to
    gsap.to(".navbar", {
      y: 0,
      duration: 2,
      ease: "power4.out",
    });
  })



  return (
    <Nav className='navbar'>
      <img src={NikeLogo} alt="logo nike" className="nikeLogo" />
      <StyledUl>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>COLLECTIONS</li>
      </StyledUl>

      <IconeBlock>
        <img src={Search} alt="" className="searchIcon" />
        <img src={Cart} alt="" className="cartImg" />
      </IconeBlock>
    </Nav>
  );
}

export default NavBar
