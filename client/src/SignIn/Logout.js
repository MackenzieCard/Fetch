import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {
    const { logout } = useAuth0(); 

    return (
        <Wrapper>
            <LogoutButton onClick={() => logout({returnTo: "http://localhost:3000/login"})}>
                Log Out
            </LogoutButton>
        </Wrapper>
    )
}


export default LogOut; 

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`; 

const LogoutButton = styled.button`

`; 