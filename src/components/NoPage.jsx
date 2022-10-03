import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components/macro";

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
`

export default function NoPage() {
    return (
        <>
            <GreyHeading>404</GreyHeading>
            <GreyParagraph>Oops, we aren't able to find this page.</GreyParagraph>
            <LinkAsButton to="/">Back To Home</LinkAsButton>
        </>
    )
}
