import React from 'react';
import styled from "styled-components";
import allColors from "../utils/allColors";
import Nike from '../assets/Nike Logotext.png';
// import  gsap
 import { gsap } from "gsap";

const StyledHeadlines = styled.div`
//  border: 0.0625rem solid white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content:left;
  text-align: justify;
  top: 8.7325rem;
  left: 10.5rem;
  width: 27.5625rem;
//   height: 19.95rem;
height:50%;
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
`;





const Headlines = () => {
  return (
    <StyledHeadlines>
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
