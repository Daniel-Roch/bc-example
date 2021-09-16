import React from 'react'
import { Link } from 'react-router-dom'
import LogoHeader from '../../assets/logoHeader.png'

import {DivHeader,LogoImg,NavLink} from './styled'

export default function Header() {
    return (
        <DivHeader>
            <Link to="/"><LogoImg src={LogoHeader}/></Link>
            <NavLink>
                <Link to="/">Nosso Produto</Link>
                <Link to="/">Blog</Link>
            </NavLink>
        </DivHeader>
    )
}
