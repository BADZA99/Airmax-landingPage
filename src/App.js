import './App.css';
import styled  from "styled-components";
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
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";



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
    position: absolute;
    bottom: 60%;
    left: 37%;
    width: 65%;
    height: 50%;
    z-index: 10;
    // border: 0.0625rem solid white;
    // transform: rotateY(180deg);

    img {
      width: 70%;
      // retourner dans l'autre sens et le faire pivoter vers le bas
      transform: rotate(-24deg);
      object-fit: cover;
    }
  }

  .circles {
    width: 35.1788rem;
    height: 35.4469rem;
    top: 4.9906rem;
    left: 45.5rem;
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
  }

  .minicircles {
    position:absolute;
    width: 7.9981rem;
    height: 2.8775rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    // retourne en 180deg
    transform: rotate(90deg);
    top:52%;
    right: 5.1%;
    // cibler le premier enfant
    img:first-child {
      img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit:cover;
      margin-bottom:0;
    }
    }
    .blackEll{
      // rotate un peu
      transform: rotate(93deg);
    }

    .redEll{
      transform: rotate(93deg);
    }

    .whiteEll{
      transform: rotate(93deg);
    }

  }
`;



function App() {
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
      <Animate
        play
        start={{
          opacity: 0,
      // transform: "translateX(100%)",
       transform: "rotate(-24deg)"
        }}
        end={{
          opacity: 1,
          transform: "translateX(-100%)", // End at the original position
        }}
        duration={2.0} // Duration of the animation in seconds
      >
      </Animate>
        <div className="bigChoes">
          <img src={BigChoes} alt="big nike choes" />
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
      <DetailsShoes />
    </StyledHome>
  );
}

export default App;
