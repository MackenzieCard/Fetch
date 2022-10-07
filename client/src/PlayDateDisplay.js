import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const PlayDateDisplay = ({ user, hasAPlaydate }) => {
  const { ownerName, dogName, joined, location, avatarSrc } = user;
  const { users, currentUser, currentUserData, setCurrentUserData, refreshData, setRefreshData} =
    useContext(UserContext);
    const [isRequested, setIsRequested] = useState(hasAPlaydate);

  // Navigation to specific profile page
  let navigate = useNavigate();
  // For button logic

  const managePlaydate = (requestType) => {

      // PATCH add to playdates array
      fetch("/api/update-playdate", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: currentUser.email,
          name: currentUser.ownerName, 
          userName: user.ownerName, 
          status: "Pending",
          id: user.id,
          requestType
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          requestType === "request" ? setIsRequested(true) : setIsRequested(false)
          
      })
      .then((setRefreshData(!refreshData)))
  };
  return (
    <Wrapper>
      <UserDisplayBox>
        <UserInfo>
          <PictureButton onClick={() => navigate(`/profilepage/${user.id}`)}>
            <Photo src={user.avatarSrc} />
          </PictureButton>
          <div>
            <OwnerName>Owner: {user.ownerName}</OwnerName>
            <DogName>Dog: {user.dogName}</DogName>
            <Location>Current Location: {user.location}</Location>
            <Joined>Joined: {user.joined}</Joined>
            {!isRequested && (
              <Button onClick={() => managePlaydate("request")}>
                Request a Playdate
              </Button>
            )}
            {isRequested && (
              <CancelButton onClick={() => managePlaydate("cancel")}>
                Cancel Request
              </CancelButton>
            )}
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

const PictureButton = styled.button`
border-style: none;
background-color:#afe1af;
border-radius: 7px;
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

const CancelButton = styled(Button)`
  background-color: gray;
`;

const OwnerName = styled.div``;

const DogName = styled.div``;

const Joined = styled.div``;

const Location = styled.div``;
