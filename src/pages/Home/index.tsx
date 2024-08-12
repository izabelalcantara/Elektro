import { useNavigate } from "react-router-dom";
import React from 'react';
import { AppContainer, LogoContainer, Logo, Title } from './style';
import logo from '../../assets/raio elektro 1.png';

function Home() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const TimeOut = setTimeout(() => {
      navigate("/cadastropag"); 
    }, 3050);
    return () => clearTimeout(TimeOut);
  }, [navigate]);

  return (
    <AppContainer>
      <LogoContainer>
        <Logo src={logo} alt="Elektro Logo" />
        <Title>Elektro</Title>
      </LogoContainer>
    </AppContainer>
  );
}

export default Home;
