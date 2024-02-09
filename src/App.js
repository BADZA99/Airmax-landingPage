import './App.css';
import styled from "styled-components";
import allColors from './utils/allColors';
import HamburgerMenu from './assets/Hamburger.png'
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import Socials from './components/Socials';
import Headlines from './components/Headlines';
import BigNikeLogo from './assets/big nike logo.png';
import BigChoes from "./assets/BigChoes.png";
import BigCircleW from "./assets/big Ellipse white.png";
import BigCircleB from "./assets/big Ellipse noir.png";
import elliperedBlack from "./assets/elipse red black.png";
import ellipseredWhite from "./assets/elipse red white.png";
import ellipsewhiteBlack from "./assets/elipse white black.png";
import DetailsShoes from './components/DetailsShoes';
// import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import { useEffect } from 'react';
import { gsap } from "gsap";
import { useState } from 'react';
import Catalogue from './components/Catalogue';



const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${allColors.bgColor};
  overflow: hidden;

  .bigNike {
    position: absolute;
    top: 5%;
    right: 0%;
    width: 68%;
    height: 50%;
    z-index: 10;
    // border: 0.0625rem solid white;

    img {
      width: 100%;
      transform: rotateX(10.29deg);
      object-fit: cover;
    }
  }

  .bigChoes {
    // border:1px solid red;
    position: absolute;
    bottom: 60%;
    left: 37%;
    width: 65%;
    height: 50%;
    z-index: 10;
    // border: 0.0625rem solid white;
    // transform: rotateY(180deg);
    // pointer-events: none;

    @media (max-width: 320px) {
      width: 100%;
      height: 100%;
      bottom: 55%;
      left: 24%;

      .img {
        width: 200%;
      }

      .svg {
        width: 100%;
      }
    }

    .img {
      width: 70%;
      // retourner dans l'autre sens et le faire pivoter vers le bas
      transform: rotate(-24deg);
      object-fit: cover;
    }
    .svg {
      width: 95%;
      // remonter un peu
      transform: translateY(-12%);
      object-fit: cover;
    }
  }

  .circles {
    width: 35.1788rem;
    height: 35.4469rem;
    top: 10%;
    right: 9%;
    position: absolute;
    // retourner a 180deg
    transform: rotate(180deg);

    .BigCircleW {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .BigCircleB {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 320px) {
      display: none;
    }
  }

  .minicircles {
    position: absolute;
    width: 7.9981rem;
    height: 2.8775rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // retourne en 180deg
    transform: rotate(90deg);
    top: 48%;
    right: 5.1%;
    // cibler le premier enfant
    img:first-child {
      img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 0;
      }
    }
    .blackEll {
      // rotate un peu
      transform: rotate(93deg);
    }

    .redEll {
      transform: rotate(93deg);
    }

    .whiteEll {
      transform: rotate(93deg);
    }

    @media (max-width: 320px) {
      .minicircles {
        display: none;
      }
      .circles {
       display:none;

      
    }
    @media (max-width: 417px) {
      .minicircles {
        display: none;
      }
      .circles {
       display:none;

      
    }
  }

  // RESPONSIVE
  @media (max-width: 768px) {
    .bigNike {
      width: 100%;
      height: 30%;
    }

    .bigChoes {
      width: 100%;
      height: 30%;
    }

    .circles {
      display: none;
    }

    .minicircles {
      width: 5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .bigNike {
      width: 100%;
      height: 20%;
    }

    .bigChoes {
      top: 20%;
      left: 0;
      width: 100%;
      height: 20%;
    }

    .circles {
      display: none;
    }

    .minicircles {
      width: 3rem;
      height: 1rem;
    }
  }

  @media (max-width: 320px) {
    .bigNike {
      width: 100%;
      height: 20%;
    }

    .bigChoes {
      top: 40%;
      left: 0;
      width: 100%;
      height: 30%;

      .img {
        width: 80%;
        height: auto;
      }

      .svg {
        width: 100%;
        height: auto;
      }
    }

    .circles {
      display: none;
    }

    .minicircles {
      display: none;
    }
  }
`;





function App() {
  const [defaultImg, setDefaultImg] = useState(BigChoes);
  // console.log(defaultImg);
  useEffect(() => {
    gsap.from(".bigNike", { duration: 1, x: 300, opacity: 0, scale: 0.5 });
    gsap.from(".bigChoes", { duration: 1, x: -300, opacity: 0, scale: 0.5 });
    gsap.from(".svg", { duration: 1, x: -300, opacity: 0, scale: 0.5 });
    gsap.from(".circles", { duration: 1, x: 300, opacity: 0, scale: 0.5 });
    // gsap.from(".minicircles", { duration: 1, x: -300, opacity: 0, scale: 0.5 });
    // to
    gsap.to(".bigNike", { duration: 1, x: 0, opacity: 1, scale: 1 });
    gsap.to(".svg", { duration: 1, x: 0, opacity: 1, scale: 1 });
    gsap.to(".bigChoes", { duration: 1, x: 0, opacity: 1, scale: 1 });
    gsap.to(".circles", { duration: 1, x: 0, opacity: 1, scale: 1 });
    // gsap.to(".minicircles", { duration: 2, x: 0, opacity: 1, scale: 1 });
  }, [defaultImg]);



  return (
    <StyledHome className="Home">
      <img src={HamburgerMenu} alt="HamburgerMenu" className="hambMenu" />
      <NavBar />
      <SideMenu />
      <Socials />
      <Headlines />
      <div className="bigNike">
        <img src={BigNikeLogo} alt="big nike logo" />
      </div>
      <div className="bigChoes">
        <img
          src={defaultImg}
          alt="big nike choes"
          className={
            defaultImg !== BigChoes ? "svg" : "img"
          }

          style={{
            // si defaultImg est different de BigChoes alors on retourne l'image sinon on fait rien
            transform: `${
              defaultImg === BigChoes ? "rotate(-24deg)" : ""
            }`,
          }}
        />
      </div>
     <div className="circles">
        <img src={BigCircleB} alt="BigCircleB" className="BigCircleB" />
        <img src={BigCircleW} alt="BigCirclew" className="BigCirclew" />
      </div>
      <div className="minicircles">
        <img
          src={ellipsewhiteBlack}
          alt="elipse white black"
          className="blackEll"
        />
        <img src={elliperedBlack} alt="elliperedBlack" className="redEll" />
        <img src={ellipseredWhite} alt="ellipseredWhite" className="whiteEll" />
      </div>
      <DetailsShoes imgShoe={defaultImg} setDefaultImg={setDefaultImg} />
      <Catalogue imgShoe={defaultImg} setDefaultImg={setDefaultImg} />
    </StyledHome>
  );
}

export default App;
