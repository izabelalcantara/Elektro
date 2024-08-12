import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 350px;
`;

export const Image = styled.img`
  width: 300px; 
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #2B2B2B;
  margin-bottom: 10px;
  font-family:Montserrat;
  

  &:nth-child(2) {
    font-size: 24px;
    color: #2B2B2B;
    margin-bottom: 20px;
    font-family:Montserrat;
    weight:bold;
  }
`;

export const ContinueButton = styled.img`
  width: 49px;
  height: 49px;
  margin-top: 40px;
  cursor: pointer;
  align-items:rigth;
`;
