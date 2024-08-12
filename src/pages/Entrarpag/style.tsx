import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const HeaderWrapper = styled.div`
  width: 100%; 
  background-color: #f8f8f8; 
  padding: 10px 0; 
`;


 export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
  max-width: 350px;
  padding: 20px;
  margin: 0 auto;  
`;



export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 45px;
  padding: 0 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #007bff;
  margin: 10px 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #ccc;
`;

export const OrText = styled.span`
  margin: 0 10px;
  font-size: 14px;
  color: #888;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

export const SocialButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  margin-top: auto; 
  font-size: 14px;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
