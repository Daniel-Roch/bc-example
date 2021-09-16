import styled from "styled-components";

export const DivHeader = styled.div`
    grid-area: Header;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 7.9795vw;
    padding-right: 7.9795vw;
    height: 81px;
    color: rgb(56, 53, 57);
    font-size: 14px;
    background: linear-gradient(266deg, rgb(47, 254, 96) 0%, rgb(44, 254, 131) 20%, rgb(44, 254, 134) 100%) 0% 0% no-repeat padding-box padding-box transparent;
`

export const LogoImg = styled.img`
    position: relative;
    width: 126.8px;
    height: 36.8px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 1.46413vw;
`

export const NavLink = styled.nav`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 1rem;
    a{
        color: rgb(56, 53, 57);
        text-decoration: none;
        padding: 0px 2rem;
        font-size: 1.0rem;
        transition: transform 0.2s ease 0s;
        font-weight: 700;
    }
`