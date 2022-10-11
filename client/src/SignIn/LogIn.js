import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
// import image from "../LoginImage/LogInBackgroundPic.jpg"


const LogIn = ({handleLogin}) => {
    const { loginWithRedirect, user } = useAuth0();
return (
<Wrapper>
    {/* <div style={{backgroundImage: `url(${image})`}}>  */}
    <LoginButton onClick={() => loginWithRedirect()}>
        Log In Now to Join the Fun! 
    </LoginButton>
    {/* </div> */}
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