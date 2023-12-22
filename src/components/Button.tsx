import React from "react";
import './button.css'

interface ButtonProps {
  text: string;
  onClick: () => void;
  btnStyle: string;
  isFetching: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, btnStyle, isFetching }) => {
  return <button disabled={isFetching} className={btnStyle} onClick={onClick}>{text}</button>;
};
