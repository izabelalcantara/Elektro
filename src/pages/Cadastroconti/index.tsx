import React from 'react';
import { Header } from '../../components/Header';
import Logo from '../../assets/login/facebook.png';
import LogoGO from '../../assets/login/gogle.png';
import CustomButton from '../../components/Botao';
import { Container, Content, RedesContainer, Linha, ButtonRedes, Image, Divisao, Form, Input, Texto } from './style';
import { useNavigate } from 'react-router-dom'; 
const Cadastroconti = () => {
    const navigate = useNavigate(); 

    const handleClick = () => {
       
        
        navigate('/parabenscad'); 
    };

    return (
        <Container>
            <Header />
            <Content>
                <RedesContainer>
                    <ButtonRedes>
                        <Image src={Logo} alt="facebook" />
                    </ButtonRedes>
                    <ButtonRedes>
                        <Image src={LogoGO} alt="google" />
                    </ButtonRedes>
                </RedesContainer>
                <Divisao>
                    <Linha />
                    <Texto>ou</Texto>
                    <Linha />
                </Divisao>
                <Form>
                    <Input type="text" placeholder="Digite seu nome completo" />
                    <Input type="text" placeholder="Digite seu CPF" />
                    <Input type="tel" placeholder="Digite seu telefone" />
                    <Input type="email" placeholder="Digite seu e-mail" />
                    <Input type="password" placeholder="Digite sua senha" />
                    <Input type="password" placeholder="Confirme sua senha" />
                    <CustomButton text="Cadastre-se!" onClick={handleClick} />
                </Form>
            </Content>
        </Container>
    );
};

export default Cadastroconti;
