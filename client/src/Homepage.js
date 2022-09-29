import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import UserDisplay from "./UserDisplay";

const Homepage = () => {
  const { users, currentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);
console.log(users)
  return (
    <>
      <Wrapper>
        <Title>Home Page</Title>
        <DisplayWrapper>
        {users && <User data={users} />}
        {users && users.map((user) => {
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
  grid-template-columns: auto auto auto auto auto;
  min-height: 86vh;
  gap: 50px;
`;


const Title = styled.div`
  font-family: arial;
  font-size: 25px;
  color: #355e3b;
`;

const User = styled.div``;
