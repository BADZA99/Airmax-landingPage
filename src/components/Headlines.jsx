import React from 'react';
import styled from "styled-components";
import allColors from "../utils/allColors";
import Nike from '../assets/Nike Logotext.png';
// import  gsap
 import { gsap } from "gsap";
import { useEffect } from 'react';

const StyledHeadlines = styled.div`
  //  border: 0.0625rem solid white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: left;
  text-align: justify;
  top: 8.7325rem;
  left: 10.5rem;
  width: 27.5625rem;
  //   height: 19.95rem;
  height: 50%;
  //   padding:0;

  p {
    color: ${allColors.blanc};
    font-family: "Helvetica";
    font-size: 1.3125rem;
    font-weight: 330;
    line-height: 1.5rem;
    letter-spacing: 0em;
    text-align: left;

    span {
      color: ${allColors.blanc};
      font-family: "Futura Bold", sans-serif;
      font-weight: 700;
      font-size: 1.3669rem;
      line-height: 1.5rem;
    }
  }

  button {
    position: absolute;
    width: 10.6125rem;
    height: 2.3638rem;
    top: 88%;
    left: 0;
    border-radius: 0.5031rem;
    background-color: ${allColors.orange};
    color: ${allColors.blanc};
    font-family: "Futura Bold", sans-serif;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 0.9375rem;
    letter-spacing: 0em;
    text-align: center;
    outline:none;
    border:none;
    cursor: pointer;
  }

  @media (max-width: 320px) {
    width: 80%;
    left: 1%;
    top: 0.7325rem;
    p {
      font-size: 0.6rem;
      line-height: 1.2rem;
    }
    button {
      width: 8.6125rem;
      height: 2.3638rem;
      top: 78%;
      left: 0;
      border-radius: 0.5031rem;
      background-color: ${allColors.orange};
      color: ${allColors.blanc};
      font-family: "Futura Bold", sans-serif;
      font-size: 0.8125rem;
      font-weight: 700;
      line-height: 0.9375rem;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`;

const H1 = styled.h1`
  color: ${allColors.beige};
  font-family: "Futura Bold", sans-serif;
  font-size: 6.4375rem;
  font-weight: 700;
  line-height: 7.375rem;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 320px) {
    font-size: 4.4375rem;
    line-height: 5.375rem;
  }

`;

const H2 = styled.h2`
  color: ${allColors.beige};
  font-family: "Futura Bold", sans-serif;
  font-size: 4.75rem;
  font-weight: 400;
  line-height: 5.6875rem;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 320px) {
    font-size: 3.75rem;
    line-height: 4.6875rem;
  
  }
`;





const Headlines = () => {
  useEffect(()=>{
    // anime gsap container
    gsap.from(".container", { duration: 1, x: -300, opacity: 0, scale: 0.5 });
    // gsap to
    gsap.to(".container", { duration:
    1, x: 0, opacity: 1, scale: 1 });
  }, []);
  return (
    <StyledHeadlines className='container'>
      <img src={Nike} alt="nike logo" className="nikeLogoTxt" />
      <H1>BORING</H1>
      <H2>shoes?</H2>
      <p>
        Let Us <span>HELP</span> you fix it...
      </p>
      <button>Explore our store</button>
    </StyledHeadlines>
  );
}

export default Headlines
