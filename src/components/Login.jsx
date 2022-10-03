import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const LinkAsButton = styled(NavLink)`
    width: 100%;
    text-decoration: none;
    border-radius: 2px;
    font-size: 18px;
    background: #0093E9 linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    color: #f7f7f7;
    border: none;
    padding: 10px 8px;
    display: block;
    margin: 8px 0 0 0;
    transition: 0.1s opacity;
    &:hover{
        opacity: 0.8;
    }
`

const GreyHeading = styled.h1`
    color: #323232;
`

const GreyParagraph = styled.p`
    color: #323232;
    font-size: 18px;
    opacity: 0.9;
    margin: 8px 0 0 0;
`

const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 2px solid #32323232;
    margin: 8px 0 0 0;
    background-color: #f7f7f7;
    border-radius: 2px;
    font-size: 16px;
    outline: none;
    transition: 0.1s border;
    &:focus{
        border: 2px solid #0093E9;
    }
`

export default function Login() {
    return (
        <>
            <GreyHeading>Login Page</GreyHeading>
            <GreyParagraph>Fill the following data to continue.</GreyParagraph>
            <StyledInput type="email" placeholder="Enter your email here"/>
            <StyledInput type="password" placeholder="Enter your password here"/>
            <LinkAsButton to="/404">Login</LinkAsButton>
        </>
    )
}
