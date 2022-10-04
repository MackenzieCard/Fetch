import React from "react";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import UserDisplay from "./UserDisplay";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {
  const { users, currentUser, setCurrentUser, currentUserData, setCurrentUserData } =
    useContext(UserContext);
    const navigate = useNavigate(); 
    const {user} = useAuth0()

    useEffect(() => {
      if (!user) return 
      fetch("/api/get-user", {
        method: "POST", 
        headers: {
          "Content-Type":"application/json", 
        }, 
        body: JSON.stringify({email: user.email, name:user.given_name}), 
      })
      .then(res => res.json())
      .then(res => {if (!currentUser) setCurrentUser(res.data)
        sessionStorage.setItem("user-id", res.data.id)
      })
    }, [])

console.log(users)
if (!user || !currentUser ) {
  navigate("/login")
} 
  return (
    <>
      <Wrapper>
        <Title>Home Page</Title>
        <DisplayWrapper>
        {/* {users && <User users={users} />} */}
        {users && users.map((user) => {
            return <UserDisplay user={user}/>
        })}
        </DisplayWrapper>
      </Wrapper>
    </>
  );
};

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  /* margin-left: 250px; */
`;

const DisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto ;
  min-height: 86vh;
  gap: 50px;
  max-width: 200px;
`;


const Title = styled.div`
  font-family: arial;
  font-size: 25px;
  color: #355e3b;
  padding-bottom: 10px;
`;

const User = styled.div``;
