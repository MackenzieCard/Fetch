import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const {user} = useAuth0(); 
  return (
    <Wrapper>
      <StyledLink to={"/"}>
        <NameContainer>Fetch</NameContainer>
      </StyledLink>
      {!user ? (
        <StyledLink to={"/login"}>
          <LogInButton>Log In</LogInButton>
        </StyledLink>
      ) : (
        <StyledLink to={"/logout"}>
          <LogOutButton>Log Out</LogOutButton>
        </StyledLink>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #355e3b;
`;

const NameContainer = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #355e3b;
  left: 0%;
`;

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
  color: #355e3b;
  font-size: 45px;
  &:hover {
    cursor: pointer;
  }
`;

const LogOutButton = styled.div`
  font-family: arial;
  position: absolute;
  right: 0%;
  color: #355e3b;
  font-size: 45px;
  &:hover {
    cursor: pointer;
  }
`;

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
