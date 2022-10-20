// This code contains the logic used to render the homepage 

import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import UserDisplay from "./UserDisplay";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {
  const { users, currentUser, setCurrentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);
    const navigate = useNavigate(); 
    const {user} = useAuth0()



console.log(currentUser)
console.log(users)
if (!user || !currentUser ) {
  navigate("/login")
} 
  return (
    <>
      <Wrapper>
        <Title>Fetch Users in Your Area </Title>
        <DisplayWrapper>
        {users && users.map((user) => {
            if (user.id !== currentUser.id)
            return <UserDisplay user={user}/>
        })}
        </DisplayWrapper>
      </Wrapper>
    </>
  );
};

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const DisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto ;
  min-height: 86vh;
  gap: 50px;
  max-width: 200px;
`;

const Title = styled.div`
  font-family: arial;
  font-size: 45px;
  font-weight: bold;
  color: #355e3b;
  padding-bottom: 10px;
`;


