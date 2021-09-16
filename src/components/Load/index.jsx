import React from "react";
import styled, { keyframes } from "styled-components";


const Animation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const LoadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 300px;
`;
const Circle = styled.div`
  background-color: rgb(44, 254, 131);
  border-radius: 100%;
  width: 30px;
  height: 30px;
  margin: 0 3px;
  animation: ${Animation} 0.7s linear infinite;
  animation-delay: ${props => props.delay};
`;

export default function Load(){

  return (
      <LoadDiv>
          <Circle delay="0s" />
          <Circle delay=".1s" />
          <Circle delay=".2s" />
      </LoadDiv>
  )
}