import React from "react";

import styled from "styled-components";

function NoMatch() {
  return <Title>Nothing Matching Found</Title>;
}

export default NoMatch;

const Title = styled.h1`
  text-align: center;
  margin: auto;
  transform: translateY(-100px)
`;
