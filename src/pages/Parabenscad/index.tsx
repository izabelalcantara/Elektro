import React from "react";
import { useNavigate } from "react-router-dom"; 
import bannerImage from '../../assets/parabens/Aimação.png';
import Continue from '../../assets/parabens/Group 10.svg?react';

import { Container, Content, Image, Title } from "./style";

const Congrat = () => {
    const navigate = useNavigate(); 

    const handleContinueClick = () => {
        navigate('/telaini'); 
    };

    return (
        <Container>
            <Content>
                <Image src={bannerImage} alt="Banner de Cadastro" />
                <Title>Parabéns, você conseguiu!</Title>
                <Title>Bem-vindo ao time de usuários e colaboradores Elektro.</Title>
                <Continue onClick={handleContinueClick} style={{ cursor: 'pointer' }} />
            </Content>
        </Container>
    );
}

export default Congrat;
