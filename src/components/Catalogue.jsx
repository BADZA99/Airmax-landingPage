import React from "react";
import styled from "styled-components";
// import allColors from "../utils/allColors";
import { gsap } from "gsap";
import { useEffect } from "react";
import Allshoes from "../utils/allProducts";
// import { useState } from "react";
// import Shoe1 from "../assets/air-max-90-flyease.png";


const StyledCatalogue = styled.div`
//   border: 1px solid red;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 46.5044rem;
  height: 8.7231rem;
  top: 79%;
  left: 11%;
  z-inndex: 12;

  .box {
    // border: 1px solid red;
    z-index: 11;

    width: 9rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
     img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
`;

const Catalogue = ({ imgShoe, setDefaultImg }) => {
    useEffect(() => {
        gsap.from(".box", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        });
        // to
        gsap.to(".box", {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        });

        

    }, []);
  return (
    <StyledCatalogue>
      {Object.keys(Allshoes).map((key) => {
        return (
          <div
            className="box"
            style={{
              backgroundColor: `${Allshoes[key].color}`,
            }}
            onClick={() => {
                setDefaultImg(Allshoes[key].img);
                }
            }
          >
            {/* rotate le dernier  élément pour qu'il soit placé en bas à droite */}
            <img
              src={Allshoes[key].img}
              alt={Allshoes[key].name}
              style={{
                // rotate le AIR MAX III et diminuer sa width et height
                transform: `${
                  Allshoes[key].name === "Air Max III" ? "rotate(-24deg)" : ""
                }`,
                height: `
                ${Allshoes[key].name === "Air Max III" ? "80%" : ""}`,
                width: `
                ${Allshoes[key].name === "Air Max III" ? "80%" : ""}`,
              }}
            />
          </div>
        );
      })}
    </StyledCatalogue>
  );
};

export default Catalogue;
