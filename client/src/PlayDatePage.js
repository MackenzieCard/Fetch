import React from "react";
import styled from "styled-components";
import UserDisplay from "./UserDisplay";
import { UserContext } from "./UserContext";
import { useState, useEffect, useContext } from "react";

const PlayDatePage = () => {
    // const { ownerName, dogName, joined, location, avatarSrc } = user;
    // const { users, currentUser, currentUserData, setCurrentUserData } =
    // useContext(UserContext);
    return (
<Wrapper>
    <Title> Request a Playdate! </Title>
      {/* <UserDisplayBox>
        <UserInfo>
          <div>
            <Photo src={user.avatarSrc} />
          </div>
          <div>
            <OwnerName>Owner: {user.ownerName}</OwnerName>
            <DogName>Dog: {user.dogName}</DogName>
            <Location>Current Location: {user.location}</Location>
            <Joined>Joined: {user.joined}</Joined>
          </div>
        </UserInfo>
      </UserDisplayBox> */}
    </Wrapper>
  );
};

export default PlayDatePage;

const Wrapper = styled.div`
  font-family: arial;
  margin-left: 250px;
`;

const Title = styled.div`
  font-family: arial;
  font-size: 25px;
  color: #355e3b;
  padding-bottom: 10px;
`;

const UserDisplayBox = styled.div`
  display: flex;
  &:hover{
    cursor: pointer;
  }
`;

const UserInfo = styled.div`
  display: flex;
  background-color: #afe1af;
  border-radius: 7px;
  width: 250px;
  max-height: 150px;
`;

const Photo = styled.img`
  max-height: 150px;
  max-width: 150px;
  border-radius: 7px;
`;

const OwnerName = styled.div`

`;

const DogName = styled.div`

`;

const Joined = styled.div`

`;

const Location = styled.div`

`;

