// This page contains the code that renders the Request a Playdate page

import React from "react";
import styled from "styled-components";
import UserDisplay from "./UserDisplay";
import { UserContext } from "./UserContext";
import { useState, useEffect, useContext } from "react";
import PlayDateDisplay from "./PlayDateDisplay";

const PlayDatePage = () => {
  const {
    currentUser,
    setCurrentUser,
    currentUserData,
    setCurrentUserData,
    refreshData, 
    setRefreshData
  } = useContext(UserContext);
  console.log(currentUser);

  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    fetch("/api/get-users")
      .then((res) => res.json())
      .then((userData) => {
        setUsers(userData.data);
      });
  }, []);

  return (
    <Wrapper>
      <Title> Request a Playdate! </Title>
      <DisplayWrapper>
        {users &&
          currentUser &&
          users.map((user) => {
            const notCurrentUser = user.id !== currentUser.id;
            console.log(currentUser.ownerName);
            const hasAPlaydate = user.playdates.find((playdate) => {
              console.log(playdate);
              return playdate["requested-by"] === currentUser.email;
            });
            return (
              notCurrentUser && (
                <PlayDateDisplay hasAPlaydate={hasAPlaydate} user={user} />
              )
            );
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
  grid-template-columns: auto auto auto auto;
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
