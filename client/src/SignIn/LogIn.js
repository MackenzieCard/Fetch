import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
    const { loginWithRedirect } = useAuth0(); 
return (
<Wrapper>
    <LoginButton onClick={() => loginWithRedirect({redirect_uri:"http://localhost:3000/"})}>
        Log In Now to Join the Fun! 
    </LoginButton>
</Wrapper>
)
}

export default LogIn; 

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`; 

const LoginButton = styled.button`

`; 