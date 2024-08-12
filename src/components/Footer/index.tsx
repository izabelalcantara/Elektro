import React from "react";
import Home from '../../assets/navbarr/home.svg?react';
import Chat from '../../assets/navbarr/chat.svg?react';
import Sino from '../../assets/navbarr/sino.svg?react';
import User from '../../assets/navbarr/user.svg?react';
import { Container, IconContainer } from "./style";

export const Footer = () => {
  return (
    <Container>
      <IconContainer>
        <Home />
        <span>Home</span>
      </IconContainer>
      <IconContainer>
        <Chat />
        <span>Chat</span>
      </IconContainer>
      <IconContainer>
        <Sino />
        <span>Avisos</span>
      </IconContainer>
      <IconContainer>
        <User />
        <span>Perfil</span>
      </IconContainer>
    </Container>
  );
};
