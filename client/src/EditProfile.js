// This component contains the code that allows the current user to
// update their profile information

import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [value, setValue] = useState({});
  const userId = sessionStorage.getItem("user-id");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    fetch(`/api/update-user/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(value),
    }).then(res => {res.json()})
    .then(data => {console.log(data)})
  };

  return (
    <Wrapper>
      <Title> Edit Your Information </Title>
      <Subheading>
        Use these fields to edit or update your current information
      </Subheading>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          placeholder="Owner Name"
          onChange={(e) => {
            setValue({ ...value, ownerName: e.target.value });
          }}
        />
        <Input
          type="text"
          placeholder="Dog Name"
          onChange={(e) => {
            setValue({ ...value, dogName: e.target.value });
          }}
        />
        <Input
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setValue({ ...value, location: e.target.value });
          }}
        />
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setValue({ ...value, email: e.target.value });
          }}
        />
        <ButtonWrapper>
          <Submit type="submit" value="Submit" disabled={!value.dogName && !value.ownerName && !value.location && !value.email}>
            Submit
          </Submit>
          {/* TODO: LOGIC FOR REDIRECTING BACK TO CURRENT USER PROFILE UPON CLICKING CANCEL */}
        <CancelButton onClick={() => navigate(`/profilepage/${userId}`)}>
            {" "}
            Cancel{" "}
          </CancelButton>
        </ButtonWrapper>
      </StyledForm>
    </Wrapper>
  );
};

export default EditProfile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 300px;
`;

const Submit = styled.button`
  border: none;
  border-radius: 2px;
  max-width: 150px;
  background-color: #355e3b;
  border-radius: 10px;
  font-size: 25px;
  color: white;
  margin: 15px 0;
  border-radius: 5px;
  margin-right: 10px;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  /* &:hover{
    cursor: pointer;
  } */
`;

const CancelButton = styled.button`

`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  margin: 15px 0;
`;

const Input = styled.input`
  margin: 5px 0;
  border: 1px solid #355e3b;
`;

const Title = styled.div`
  font-family: Arial;
  font-size: 25px;
  font-weight: bold;
  color: #355e3b;
`;

const Subheading = styled.div`
  font-family: Arial;
  color: #355e3b;
`;

const NavigationLink = styled.button`
  border: none;
  border-radius: 2px;
  max-width: 150px;
  background-color: #355e3b;
  border-radius: 10px;
  font-size: 25px;
  color: white;
  margin: 15px 0;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: gray;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
