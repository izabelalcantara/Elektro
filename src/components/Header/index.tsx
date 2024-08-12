import React from 'react';
import Setinha from '../../assets/cadastro/setinha.svg?react';
import { Container, Seta, Titulo } from './style';

export const Header = () => {
    return (
        <header>
            <Container>
                <Seta>
                    <Setinha />
                </Seta>
                <Titulo>Cadastrar-se</Titulo>
            </Container>   
        </header>
    );
};

