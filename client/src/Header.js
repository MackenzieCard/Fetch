// This file contains the code used to render the header 

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
      {!user ? 
      (
        <StyledLink to={"/login"}>
          <LogInButton>Log In</LogInButton>
        </StyledLink>
      ) : 
      (
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
  font-family: arial;
  font-size: 60px;
  font-weight: bold;
  color: #355e3b;
  left: 0%;
`;

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

