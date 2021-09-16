import styled from "styled-components";


export const CardProdutoWrapper = styled.div`
    padding: 20px;
    margin-bottom: 10px;
    margin-left: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(4,auto);
    column-gap: 10px;
    align-items: center;
    justify-items: center;
    a{
        text-decoration: none;
        color:black;
    }
`;
export const CardProdutoTitle = styled.h1`
    grid-column: 2/4;
    grid-row: 1;
    text-align: center;
    font-size: 30px;
    font-family: 'Vast Shadow', cursive;
    box-shadow: 0px 2px rgb(47, 254, 96);
`;
export const CardProdutoImage = styled.img`
    grid-column: 1/2;
    grid-row: 1/4;
    border: 1px solid rgb(47, 254, 96);
    border-radius: 20px;
    height: 400px;
    
`;

export const CardProdutoDesc = styled.p`
    grid-column: 2/4;
    grid-row: 2;
    font-size: 20px;
`
export const CardProdutoPrice = styled.p`
    grid-column: 2/4;
    grid-row: 3;
    font-size: 30px;
`
export const CardProdutoBtn = styled.button`
    grid-column: 3/4;
    grid-row: 4;
    font-size: 18px;
    font-family: "Open Sans",sans-serif;
    color: #fffdf8;
    background: rgb(44, 254, 131);
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    :hover{
        background: rgb(44, 254, 160);
    }
`