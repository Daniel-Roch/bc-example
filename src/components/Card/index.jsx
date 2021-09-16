import React from 'react'

import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardCategoria,
    CardTextTitle,
    CardTextBody,
  } from "./styled";

export default function Card(props){
    return (
      <CardWrapper>
        <CardImage background={props.src} onClick={props.onClick}/>
        <CardTextWrapper>
          <CardCategoria>{props.category}</CardCategoria>
          <CardTextTitle>{props.name}</CardTextTitle>
          <CardTextBody> {props.children}
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>
    )
}
