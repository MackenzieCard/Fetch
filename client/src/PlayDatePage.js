// This page contains the code that renders the Request a Playdate page

import React from "react";
import styled from "styled-components";
import UserDisplay from "./UserDisplay";
import { UserContext } from "./UserContext";
import { useState, useEffect, useContext } from "react";
import PlayDateDisplay from "./PlayDateDisplay";

const PlayDatePage = () => {
  const { users, currentUser, setCurrentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);
    return (
<Wrapper>
    <Title> Request a Playdate! </Title>
    <DisplayWrapper>
        {users && users.map((user) => {
          if (user.id !== currentUser.id)
            return <PlayDateDisplay user={user}/> 
        })}
        </DisplayWrapper>
    </Wrapper>
  );
};

export default PlayDatePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const DisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto ;
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

