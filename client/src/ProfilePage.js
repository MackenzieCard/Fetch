import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const userId = sessionStorage.getItem("user-id");
  const [profile, setProfile] = useState(null);
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser, "profile")
  const navigate = useNavigate();
  let { id } = useParams();

  // fetch individual profile info
  useEffect(() => {
    fetch(`/api/get-user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProfile(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (profile) {
    return (
      <Wrapper>
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
        <UserDisplayBox>
          <UserInfo>
            <Photo src={profile.avatarSrc} />
            <OwnerName>Owner: {profile.ownerName}</OwnerName>
            <DogName>Dog: {profile.dogName}</DogName>
            <Location>Current Location: {profile.location}</Location>
            <Joined>Joined: {profile.joined}</Joined>
          </UserInfo>
        </UserDisplayBox>
      </Wrapper>
    );
  }
};

export default ProfilePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 600px;
  width: 400px;
  border-radius: 7px;
  line-height: 25px;
`;

const Photo = styled.img`
  max-height: 300px;
  max-width: 300px;
  border-radius: 7px;
`;

const OwnerName = styled.div``;

const DogName = styled.div``;

const Joined = styled.div``;

const Location = styled.div``;
