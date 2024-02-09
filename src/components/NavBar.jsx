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
  margin: 0 auto;
  width: 70.625rem;
  height: 2.5rem;
  top: 1.75rem;
  left: 10.5rem;
  right: 10.5rem;
  border-radius: 0.625rem;
  background-color: transparent;
  // border: 0.0625rem solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 1300px) {
    width: 70%;
    margin: 0 auto;
    left: 10%;
    right: 10%;
  }

  @media (max-width: 1024px) {
    width: 60%;
    left: 5%;
  }

  @media (max-width: 768px) {
    width: 80%;
    left: 15%;
    right: 15%;
  }

  @media (max-width: 480px) {
    width: 70%;
    // left: 1%;
    right: 1%;
  }

  @media (max-width: 320px) {
    width: 50%;
    // left: 10%;
    // right: 10%;
    justify-content:flex-end;
  }

`;
const StyledUl = styled.ul`
  //border: 0.0625rem solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  list-style: none;
  // margin: 0 auto;
  z-index: 11;
  li {
    color: ${allColors.blanc};
    font-family: "Futura Bold", sans-serif;
    font-size: 1.25rem;
    line-height: 1.465rem;
    font-weight: bold;
    cursor: pointer;

    transition: 0.3s;

    &:hover {
      color: ${allColors.orange};
      // text-decoration:underline;
    }
  }

  @media (max-width: 1300px) {
    width: 50%;
    li {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 50%;
    li {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 50%;
    li {
      font-size: 0.7rem;
    }

    @media (max-width: 584px) {
    display:none;
    }

    @media (max-width: 320px) {
      width: 100%;
      margin: 0 auto;
      li {
        font-size: 0.6rem;
      }
    }
  }
`;

const IconeBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
   width: 7%;

  // responsive
  @media (max-width: 1300px) {
    width: 15%;
  }
  @media (max-width: 768px){
    width: 20%;
  }
  @media (max-width: 480px){
    width: 20%;
  }
  @media (max-width: 320px){
   display:none;
  }
  @media (max-width: 584px){
   display:none;

  }

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
  },[])



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
