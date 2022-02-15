import React from "react";
import styled from "styled-components";

function CustomButton({ children, ...otherProps }) {
  return <Button {...otherProps}>{children}</Button>;
}

export default CustomButton;

const Button = styled.button`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: ${(props) => (props.large ? "30px" : "25px")};;
  font-weight: 600;
  border: 1px solid white;
  width: ${(props) => (props.large ? "400px" : "180px")};
  height: ${(props) => (props.large ? "180px" : "80px")};
  padding: 20px 40px;
  margin: 20px;

  &:hover {
    background: white;
    border-color: black;
    color: black;
  }
`;
