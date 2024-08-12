import React from 'react';
import { Button } from './style';
import { useNavigate } from "react-router-dom";


interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
