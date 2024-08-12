import React from "react";
import { useNavigate } from "react-router-dom"; 
import bannerImage from '../../assets/entrar/raio elektro 1.png';
import Logo from '../../assets/login/facebook.png';
import LogoGO from '../../assets/login/gogle.png';
import { HeaderWrapper, Container, Content, Image, Form, Input, Text, Divider, Line, Img, OrText, SocialContainer, SocialButton, Footer } from './style';
import { Header } from '../../components/HeadEntrar';
import CustomButton from '../../components/Botao';

const Entrar = () => {
    const navigate = useNavigate(); 

    const handleLoginClick = () => {
        navigate('/telaini'); 
    };

    const handleSignupClick = () => {
        navigate('/cadastropag'); 
    };

    return (
        <Container>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <Content>
                <Image src={bannerImage} alt="Banner de Cadastro" />
                <Form>
                    <Input type="email" placeholder="Digite seu e-mail" />
                    <Input type="password" placeholder="Digite sua senha" />
                    <Text>Esqueci minha senha</Text>
                    <CustomButton text="Entrar" onClick={handleLoginClick} /> 
                </Form>
                <Divider>
                    <Line />
                    <OrText>ou</OrText>
                    <Line />
                </Divider>
                <SocialContainer>
                    <SocialButton>
                        <Img src={Logo} alt="facebook" />
                    </SocialButton>
                    <SocialButton>
                        <Img src={LogoGO} alt="google" />
                    </SocialButton>
                </SocialContainer>
            </Content>
            <Footer>
                <Text><a onClick={handleSignupClick}>Não possui cadastro? Cadastre-se!</a></Text> 
            </Footer>
        </Container>
    );
};

export default Entrar;
