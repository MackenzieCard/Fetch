import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {
  const { logout } = useAuth0();
  const LogOutButton = () => {
    sessionStorage.clear();
    logout({ returnTo: "http://localhost:3000/login" });
  };
  return (
    <Wrapper>
      <LogoutButton onClick={LogOutButton}>Log Out</LogoutButton>
    </Wrapper>
  );
};

export default LogOut;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoutButton = styled.button``;
