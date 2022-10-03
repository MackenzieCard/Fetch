import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = ({handleLogin}) => {
    const { loginWithRedirect, user } = useAuth0();
// const handleLogin = async () => {
//     await loginWithRedirect()
//     console.log(user)
//     if (user) {
//       fetch("/api/get-user", {
//         method: "POST", 
//         headers: {
//           "Content-Type":"application/json", 
//         }, 
//         body: JSON.stringify(user.email), 
//       })
//       .then(res => res.json())
//       .then(res => console.log(res))
//     }
// }

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
`; 

const LoginButton = styled.button`
background-color: #355e3b;
border-radius: 10px;
color: white;
margin-left: 300px;
`; 