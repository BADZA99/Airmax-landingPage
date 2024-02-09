import React from 'react'
import styled from "styled-components";
import allColors from '../utils/allColors';



const StyledSideMenu = styled.ul`
  // border: 0.0625rem solid white;
  position: absolute;
  top: 19.1875rem;
  left: -4.8375rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 18.375rem;
  align-items: center;
  transform: ;
  //  rotate pour qu'il soit vertical
  transform: rotate(90deg);
  list-style: none;
  font-family: "Futura Medium BT";
  //   FAIRE TOURNER LE TEXTE DANS L'AUTRE SENS
  transform: rotate(-90deg);
  //    cibler le 2e li de la liste

  & > :nth-child(1) {
    transition: 0.4s;
    // width: 1.5rem;
    color: ${allColors.blanc};
    font-family: "Futura Medium BT";
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0rem;
    text-align: left;
    cursor: pointer;
  }
  & > :nth-child(2) {
    color: ${allColors.blanc};
    // width: 7.3125rem;
    height: 1.5rem;
    font-family: "Futura Medium BT";
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0rem;
    // text-align: left;
    cursor: pointer;
    transition: 0.4s;
  }

  & > :nth-child(3) {
    font-family: "Futura Medium BT";
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0rem;
    // text-align: left;
    color: #ffffff;
    // width: 1.5rem;
    cursor: pointer;
    transition: 0.4s;
  }

  li:hover {
    color: ${allColors.orange};
  }

  @media (max-width: 320px) {
   display:none;
  }
`;
const SideMenu = () => {
  return (
    <StyledSideMenu>
        <li>FAQ</li>
        <li>PACKAGING</li>
        <li>DELIVERY</li>
      
    </StyledSideMenu>
  )
}

export default SideMenu
