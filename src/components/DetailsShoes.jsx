import React from "react";
import styled from "styled-components";
import allColors from "../utils/allColors";
import StarFilled from "../assets/Star 4.png";
import StarEmpty from "../assets/Star 5.png";
import ArrowLeft from "../assets/Arrow---Right-2.png";
import ArrowRightFilled from "../assets/Arrow---Right-red.png";
import {gsap} from "gsap";
import { useEffect } from "react";

const StyledInfos = styled.div`
//   border: 1px solid red;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 16.5044rem;
  height: 5.7231rem;
  top: 69%;
  right: 17%;

  p {
    color: ${allColors.blanc};
    font-family: "Futura Bold", sans-serif;
    font-size: 1.25rem;
    line-height: 1.465rem;
    font-weight: bold;
    margin: 0;
  }

  .ratePrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    span {
      display: flex;
      justify-content: space-between;
      font-family: "Futura  Medium", sans-serif;
      font-size: 1.1875rem;
      font-weight: 700;
      line-height: 1.375rem;
      letter-spacing: -0.06em;
      text-align: left;
      color: ${allColors.blanc};
      align-items: center;
      img {
        margin: 0;
      }
    }
}
button {
  width: 7.25rem;
  height: 2.1875rem;
  background: transparent;
  color: ${allColors.orange};
 border: 1px solid ${allColors.orange};
  font-family: "Futura Bold", sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 0.8125rem;
  letter-spacing: 0em;
  text-align: left;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 0.3125rem;
}


  .arrows {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    cursor:pointer;
    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const DetailsShoes = () => {
  useEffect(()=>{
    gsap.from(".infos", {duration: 1, x: 100, opacity: 0, ease: "bounce"});
    gsap.to(".infos", { duration: 2,
      x: 0, 
      opacity: 1, 
      scale: 1, 
      ease: "elastic", });
  })
  return (
    <StyledInfos className="infos">
      <p>NIKE AIR MAX 270</p>
      <div className="ratePrice">
        <span>
          <img src={StarFilled} alt="star" />
          <img src={StarFilled} alt="star" />
          <img src={StarFilled} alt="star" />
          <img src={StarFilled} alt="star" />
          <img src={StarEmpty} alt="star" />
        </span>
        <span>$189</span>
      </div>
      <button>Buy Now</button>

      <div className="arrows">
        <img src={ArrowLeft} alt="arrow left" />
        <img src={ArrowRightFilled} alt="arrow right" />
      </div>
    </StyledInfos>
  );
};

export default DetailsShoes;
