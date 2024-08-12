import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding-bottom: 32px; 
  margin-top: 100px;
`;

export const Image = styled.img`
  width: 250px; 
  height: auto;
  margin-bottom: 30px; 
  position: relative;
  top: 50px; 
`;

export const Title = styled.h1`
  font-size: 20px; 
  font-weight: normal; 
  line-height: 24.38px;
  color: #2B2B2B;
  font-family: Montserrat;
  align-items: center;
  margin-bottom: 20px; 
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 12px 48px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 40px; 

  &:hover {
    background-color: #333;
  }
`;

export const Link = styled.a`
  color: #007bff; 
  text-decoration: none;
  font-size: 14px;
  margin-top: auto; 
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
