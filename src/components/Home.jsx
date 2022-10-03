import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const BtnsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 8px 0 0 0;
`

const LinkAsButton = styled(NavLink)`
    width: 100%;
    text-decoration: none;
    border-radius: 2px;
    font-size: 18px;
    background: ${props => props.primary ? "#0093E9 linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" : "#f7f7f7"};
    color: ${props => props.primary ? "#f7f7f7" : "#0093E9"};
    border: ${props => props.primary ? "none" : "2px solid #0093E9"};
    padding: ${props => props.primary ? "10px 8px" : "8px"};
    transition: 0.1s opacity;
    &:hover{
        opacity: 0.8;
    }
`

const GreyHeading = styled.h1`
    color: #323232;
`

export default function Home() {
    return (
        <>
            <GreyHeading>Home Page</GreyHeading>
            <BtnsContainer>
                <LinkAsButton to="/login" primary="true">Log in</LinkAsButton>
                <LinkAsButton to="/signup">Sign up</LinkAsButton>
            </BtnsContainer>
        </>
    )
}
