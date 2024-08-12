import styled from 'styled-components';

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
export const Header = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 50px; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 25px;
  background-color: #000;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #333;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const Linha = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #cccccc;
`;

export const OrText = styled.span`
  margin: 0 10px;
  font-size: 14px;
  color: #999999;
`;

export const RedesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin: 20px 0;
`;

export const ButtonRedes = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f5f5f5;
`;

export const Divisao = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

export const Texto = styled.span`
  margin: 0 10px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
