import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const PlayDateDisplay = ({ user }) => {
  console.log(user);
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
            {/* TODO: AFTER CLICKING, MAKE IT GREYED OUT AND SAY 
            "PLAYDATE REQUESTED" + DISABLE THE BUTTON */}
            <Button>Request a Playdate</Button>
          </div>
        </UserInfo>
      </UserDisplayBox>
    </Wrapper>
  );
};

export default PlayDateDisplay;

const Wrapper = styled.div`
  font-family: arial;
  display: flex;
  flex-direction: row;
`;

const UserDisplayBox = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

const UserInfo = styled.div`
  display: flex;
  background-color: #afe1af;
  border-radius: 7px;
  width: 250px;
  max-height: 150px;
  line-height: 20px;
`;

const Photo = styled.img`
  max-height: 150px;
  max-width: 150px;
  border-radius: 7px;
`;

const ButtonDiv = styled.div``;

const Button = styled.button`
  height: 20px;
  font-size: 10px;
  margin-top: 4px;
  background-color: #355e3b;
  color: white;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const OwnerName = styled.div``;

const DogName = styled.div``;

const Joined = styled.div``;

const Location = styled.div``;
