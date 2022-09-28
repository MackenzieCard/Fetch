import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Wrapper>
        <StyledLink to={"/"}>
        <NameContainer>Fetch</NameContainer>
        </StyledLink>
        <LogInButton>Log In</LogInButton>
    </Wrapper>
    )
}

export default Header; 

const Wrapper = styled.div`
display: flex;


`; 

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #355E3B;
`;

const NameContainer = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #355E3B;
  left: 0%;
`

// const Title = styled.div`
// color: black;
// font-size: 50px ;
// left: 0%; 
// /* font-family: var(--heading-font-family); */
// &:hover{
//   cursor: pointer;
// }
// `

const LogInButton = styled.div`
font-family: arial;
position: absolute;
right: 0%;
color: #355E3B;
font-size: 45px ;
&:hover{
  cursor: pointer;
}
`


// const SignedInButton = styled.div`
// position: absolute;
// right: 0%;
// color: white;
// font-size: 50px ;
// /* font-family: var(--heading-font-family); */
// &:hover{
//   cursor: pointer;
// }
// `

// const Buttons = styled.div`
// display: flex;
// flex-direction: row;

// `