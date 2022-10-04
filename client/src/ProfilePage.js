// This page contains the code that displays the profile for the logged in
// individual as well as the other users

import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({handleSubmit}) => {
  const userId = sessionStorage.getItem("user-id");
  const [profile, setProfile] = useState(null);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  let { id } = useParams();
  const [state, setState] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [submit, setSubmit] = useState(false);
  const [count, setCount] = useState(280);
  const [value, setValue] = useState(null);
  

  // fetch individual profile info
  useEffect(() => {
    fetch(`/api/get-user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (profile) {
    return (
      <Wrapper>
        {/* This block of code conditionally renders the title of "Your Profile" 
        and the edit profile button based on if the current user is logged in */}
        <TopWrapper>
          {id === userId ? <Title> Your Profile </Title> : ""}
          <ButtonDiv>
            {id === userId ? (
              <EditInfoButton onClick={() => navigate("/editprofile")}>
                {" "}
                Edit Your Profile{" "}
              </EditInfoButton>
            ) : (
              ""
            )}
          </ButtonDiv>
        </TopWrapper>

        {/* This block of code renders the basic user information display */}
        <PageDiv>
        <UserDisplayBox>
          <UserInfo>
            <Photo src={profile.avatarSrc} />
            <OwnerName>Owner: {profile.ownerName}</OwnerName>
            <DogName>Dog: {profile.dogName}</DogName>
            <Location>Current Location: {profile.location}</Location>
            <Joined>Joined: {profile.joined}</Joined>
          </UserInfo>
        </UserDisplayBox>


        {/* This block of code renders the status update box 
        for the logged in current user only */}
        <StatusComponent> 
          <StatusBox onSubmit={handleSubmit}>
            {/* If current user, display the status update component */}
          { id === userId ? <input
              placeholder={"Howl at your friends!"}
              value={userInput}
              type="test"
              onChange={(e) => {
                setUserInput(e.target.value);
                setCount(280 - e.target.value.length);
              }}
            /> :""}
            <NumberWrapper>
            { id === userId ? <CharLeftWarning>Characters Left:</CharLeftWarning> : ""}
              { id === userId ? <CharLeft warning={count <= 55 && count > 0} error={count < 1}>
                {count}
              </CharLeft> : ""} 
              { id === userId ? <Submit
                disabled={userInput.length <= 0 || count < 1}
                type="submit"
              >
                Woof!
              </Submit> : "" }
            </NumberWrapper>
          </StatusBox>
          { id === userId ? <PreviousStatuses> 
            Your Statuses
            {/* TODO: LOGIC FOR POSTING STATUSES HERE */}
          </PreviousStatuses> : ""} 
          {/* If looking at other users' profiles, display this title 
          above statuses */}
           { id !== userId ? <UserPreviousStatuses>
            Previous Status Updates! 
            {/* TODO: LOGIC FOR POSTING USERS' STATUSES HERE */}
          </UserPreviousStatuses> : ""} 
        </StatusComponent>
        </PageDiv>
      </Wrapper>
    );
  }
};

export default ProfilePage;

// Styling for the header and contents of the page 
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-left: 250px; */
  font-family: arial;
`;

const TopWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-family: arial;
  font-size: 25px;
  color: #355e3b;
`;

const ButtonDiv = styled.div`
  margin-left: 800px;
`;

const EditInfoButton = styled.button`
  background-color: #355e3b;
  border-radius: 10px;
  font-size: 25px;
  color: white;
  right: 0px;
`;

const UserDisplayBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  background-color: #afe1af;
  height: 400px;
  width: 400px;
  border-radius: 7px;
  line-height: 25px;
  margin-right: 175px;
`;

const Photo = styled.img`
  max-height: 300px;
  max-width: 300px;
  border-radius: 7px;
`;

const PageDiv = styled.div`
display: flex;
`; 

const OwnerName = styled.div``;

const DogName = styled.div``;

const Joined = styled.div``;

const Location = styled.div``;


// Styling for the status update input 
const StatusBox = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 100px;
    width: 300px;
  }
`;

const StatusComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  width: 500px;
  right: 0%;
`;

const Submit = styled.button`
  height: 36px;
  border: 1px solid;
  border-radius: 2px;
  background-color: #355e3b;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
  width: 100px;
  margin-left: 250px;
  margin-bottom: 10px;
  &:disabled {
    opacity: 0.5;
  }
`;

const PreviousStatuses = styled.div`
font-size: 24px;
font-family: arial;
color: #355e3b; 
`;

const NumberWrapper = styled.div`

`;

const CharLeftWarning = styled.div`

`;

const UserPreviousStatuses = styled.div`
font-size: 24px;
font-family: arial;
color: #355e3b; 
`; 

const CharLeft = styled.div`
  color: ${(props) =>
    props.error ? "red" : props.warning ? "#FDDA0D" : "black"};
`;
