import { useState } from "react";

import Left from "../../components/Left";
import { Right } from "../../components/Right";
import logo from '../../assets/logo.png'
import { BodySld ,BarSld ,MainContainer, SubContainer ,Logo} from '../../styles/theme'
import { CgDarkMode } from 'react-icons/cg'

function Main() {
  const [theme, setTheme] = useState('light');

  const ThemeChange = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }
    const darkModeButtonStyle: React.CSSProperties = {
    width:'2.5%',
    height:'5%',
    position: 'fixed',
    top: '90%',
    right: 0,  // Alteração feita para posicionar à direita
    transform: 'translateX(-90%)',
    zIndex: 9999,
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    borderRadius:30
    };
  return (
    <BodySld>
      <BarSld>
        <Logo src={logo} alt="logo" />
      </BarSld>
      <MainContainer theme={theme}>
        <SubContainer  theme={theme}>
          <Left />
          <Right />
        </SubContainer>
        <CgDarkMode onClick={ThemeChange}  style={darkModeButtonStyle}/>
      </MainContainer>
    </BodySld>
  );
}

export default Main;





