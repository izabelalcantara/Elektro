import React from "react";
import { useNavigate } from "react-router-dom"; 
import bannerImage from '../../assets/cadastro/banner.png';
import { Header } from '../../components/Header';
import { Container, Content, Image, Title, Button, Link } from "./style";

const Cadastro = () => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate("/cadastroconti"); 
    };

    return (
        <Container>
             <Header />
            <Content>
                <Image src={bannerImage} alt="Banner de Cadastro" />
                <Title>Faça parte do nosso time.</Title>
                <Title>Cadastre-se!</Title>
                <Button onClick={handleClick}>Cadastre-se!</Button> 
                <Link href="/entrarpag">Já possui cadastro? Faça Login!</Link>
            </Content>
        </Container>
    );
}

export default Cadastro;
