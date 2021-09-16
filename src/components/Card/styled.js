import styled from "styled-components";


export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: 
  "image" 
  "text";
  justify-content: center;
  border-radius: 20px;
  background-color: rgb(237, 237, 237);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  padding-bottom: 30px;
  transition: 0.3s;
  :hover{
    color: rgb(47, 254, 96);
    box-shadow: 5px 5px 0px rgba(0, 0, 0, 1);
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background: url(${props => props.background}) center no-repeat;
  background-size: cover;
  border-radius: 20px;
  border: 1px solid rgb(47, 254, 96);
  cursor: pointer;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 10px;
`;

export const CardCategoria = styled.span`
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  color: rgb(56,53,57);
  margin-bottom: 10px;
  box-shadow: 0px 2px rgb(47, 254, 96);
  transition: 0.3s;
  :hover{
    color:rgb(47, 254, 96);
  }
`;

export const CardTextBody = styled.p`
  color: rgb(0,0,0);
  font-size: 15px;
  font-weight: 300;
`;
