// This file contains the logic for users to login using Auth0 

import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = ({handleLogin}) => {
    const { loginWithRedirect, user } = useAuth0();
return (
<Wrapper>
    <LoginButton onClick={() => loginWithRedirect()}>
        Log In Now to Join the Fun! 
    </LoginButton>
</Wrapper>
)
}

export default LogIn; 

const Wrapper = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center; 
text-align: center;
`; 


const LoginButton = styled.button`
background-color: #355e3b;
border-radius: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-top: 200px ;
margin-left: 500px;
&:hover {
    cursor: pointer;
}
`; 