import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const UserDisplay = ({ user }) => {
  const { ownerName, dogName, joined, location, avatarSrc } = user;
  const { users, currentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);
  let navigate = useNavigate();

  return (
    <Wrapper>
      <UserDisplayBox onClick={() => navigate(`/profilepage/${user.id}`)}>
        <UserInfo>
          <div>
            <Photo src={user.avatarSrc} />
          </div>
          <div>
            <OwnerName>Owner: {user.ownerName}</OwnerName>
            <DogName>Dog: {user.dogName}</DogName>
            <Location>Current Location: {user.location}</Location>
            <Joined>Joined: {user.joined}</Joined>
            {/* TODO: RENDER MOST RECENT STATUS UPDATES ON MINI PROFILE */}
            <LatestStatus>Latest Status: {user.status[0].status} </LatestStatus>
          </div>
        </UserInfo>
      </UserDisplayBox>
    </Wrapper>
  );
};

export default UserDisplay;

const Wrapper = styled.div`
  font-family: arial;
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
  width: 350px;
  max-height: 200px;
  line-height: 28px;
`;

const Photo = styled.img`
  max-height: 200px;
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

const LatestStatus = styled.div`

`; 


