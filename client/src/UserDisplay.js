import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

const UserDisplay = ({ user }) => {
    const { ownerName, dogName, joined, location, avatarSrc } = user
    const { users, currentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);

    return (
        <Wrapper> 
            <UserDisplayBox>
                <UserInfo>
                    <Photo src={user.avatarSrc}/>
                    <OwnerName>Owner: {user.ownerName}</OwnerName>
                    <DogName>Dog: {user.dogName}</DogName>
                    <Location>Current Location: {user.location}</Location>
                    <Joined>Joined: {user.joined}</Joined>
                </UserInfo>
            </UserDisplayBox>
        </Wrapper>
    ); 
}; 

export default UserDisplay

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto;
font-family: arial;
`;

const UserDisplayBox = styled.div`
display: flex;
flex-direction: row;
`;

const UserInfo = styled.div`

`;

const Photo = styled.img`

`;

const OwnerName = styled.div`

`;

const DogName = styled.div`

`;

const Joined = styled.div`

`;

const Location = styled.div`

`;

