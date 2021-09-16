import React from 'react'
import {Link} from 'react-router-dom'
import {
    CardProdutoWrapper,
    CardProdutoImage,
    CardProdutoTitle,
    CardProdutoDesc,
    CardProdutoPrice,
    CardProdutoBtn
  } from "./styled";

export default function CardProduto(props) {
    return (
        <CardProdutoWrapper>
            <CardProdutoTitle>{props.name}</CardProdutoTitle>
            <CardProdutoImage src={props.src}/>
            <CardProdutoDesc>{props.description}</CardProdutoDesc>
            <CardProdutoPrice>Preço: R$ {props.price}</CardProdutoPrice>
            <CardProdutoBtn><Link to="/">Voltar</Link></CardProdutoBtn>
        </CardProdutoWrapper>
    )
}
