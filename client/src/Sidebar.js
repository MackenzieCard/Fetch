// This file contains the logic to render the sidebar 

import React, {useContext} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {BiHomeAlt} from 'react-icons/bi'; 
import {CgProfile} from 'react-icons/cg'; 
import {FaPaw} from 'react-icons/fa'; 
import { UserContext } from "./UserContext";

const Sidebar = () => {
const {currentUser} = useContext(UserContext)
const userId = sessionStorage.getItem("user-id")
return (
    <Wrapper>
        <Pages>
        {userId && <NavigationLink to="/"><BiHomeAlt/>Home</NavigationLink>}
        {userId && <NavigationLink to={`/profilepage/${userId}`}><CgProfile/>Profile</NavigationLink>}
        {userId && <NavigationLink to="/playdatepage"><FaPaw/>Play Dates</NavigationLink>}
        </Pages>
    </Wrapper>
)
}

export default Sidebar; 

const Wrapper = styled.div`


`;

const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-decoration: none;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #355E3B;
  margin-top: 30px;
  font-family: sans-serif;
  font-size: 25px;
  border-radius:50px;
  max-width: 300px;
  &:hover{
    cursor: pointer; 
    background-color:#AFE1AF;
  }
`;