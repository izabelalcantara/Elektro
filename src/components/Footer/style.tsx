import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around; 
  align-items: center;
  padding: 12px 0;
  background: #2B2B2B;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 68px;
  border-top: 1px solid #444;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    width: 24px; 
    height: 24px;
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    color: #DEDEDE;
    font-family:Montserrat;
  }
`;
