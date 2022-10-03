import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";

const EditProfile = ({ handleSubmit }) => {
  let formData = {};
  const [value, setValue] = useState("");
  return (
    <Wrapper>
      <Title> Edit Your Information </Title>
      <Subheading>
        Use these fields to edit or update your current information
      </Subheading>
      <StyledForm onSubmit={(e) => handleSubmit(e, formData)}>
        <Input
          type="text"
          placeholder="Owner Name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Dog Name"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Submit type="submit" disabled={value.length > 0 ? false : true}>
          Submit
        </Submit>
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
  background-color: #37475a;
  margin: 15px 0;
  border-radius: 5px;
  &:disabled {
    background-color: gray;
  }
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
  border:1px solid #355e3b;
  /* .placeholder {
    color: #AFE1AF; 
  } */
`;

const Title = styled.div`
  font-family: Arial;
  font-size: 25px;
  font-weight: bold;
  color: #355e3b; 
`;

const Subheading = styled.div`
  font-family: Arial;
  color: #355e3b
`;
