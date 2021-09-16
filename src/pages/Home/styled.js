import styled from "styled-components";


export const DivHome = styled.div`
    grid-template-areas: 
    "Header"
    "Cards"
    "Footer";
`

export const CardContainer = styled.div`
    grid-area: Cards;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    margin: 50px;
    @media (max-width: 1100px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
`;