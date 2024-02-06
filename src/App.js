import './App.css';
import styled  from "styled-components";
import allColors from './utils/allColors';
import HamburgerMenu from './assets/Hamburger.png'
import NavBar from './components/NavBar';

const StyledHome = styled.div`
width: 100vw;
height: 100vh;
position:relative;
background:${allColors.bgColor};
`;


function App() {
  return (
    <StyledHome className="Home">
        <img src={HamburgerMenu} alt="HamburgerMenu"  className='hambMenu'/>
        <NavBar/>
    </StyledHome>
  );
}

export default App;
