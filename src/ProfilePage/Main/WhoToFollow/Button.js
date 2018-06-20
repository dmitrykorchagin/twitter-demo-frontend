import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: #1da1f2;
  font-size: 12px;
  padding: 5px 5px 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default ({ textButton }) => {
  return (
    <React.Fragment>
      <Button>{textButton}</Button>
    </React.Fragment>
  );
};
