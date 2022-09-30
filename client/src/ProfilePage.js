import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import {UserContext} from "./UserContext"; 
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () => {
    const [profile, setProfile] = useState(null); 
    const { id } = useParams(); 
    const {user} = useAuth0(); 
    let params = useParams(); 

    // fetch individual profile info 
    // useEffect(() => {
    //     if (id) {
    //         fetch(`/api/get-users/${id}`)
    //         .then((res) => res.json())
    //         .then((profileData) => {
    //             setProfile(profileData.data)
    //         })
    //         .catch((err) => console.log(err)); 
    //     }
    // },[id])


    return (
        <Wrapper> 
            <UserDisplayBox>
                <UserInfo>
                    <Photo src={profile.avatarSrc}/>
                    <OwnerName>Owner: {profile.ownerName}</OwnerName>
                    <DogName>Dog: {profile.dogName}</DogName>
                    <Location>Current Location: {profile.location}</Location>
                    <Joined>Joined: {profile.joined}</Joined>
                </UserInfo>
            </UserDisplayBox>
        </Wrapper>
        )
    }; 
    
    export default ProfilePage; 
    
    const Wrapper = styled.div`
    display: flex;
    `;
    
    const Title = styled.div`
    font-family: arial;
    font-size: 25px;
    color: #355E3B;
    `;

    const ProfilePageBox = styled.div`
    
    `; 


const UserDisplayBox = styled.div`
display: flex;
flex-direction: column;
`;

const UserInfo = styled.div`
background-color: #AFE1AF;
border-radius: 7px;
`;

const Photo = styled.img`
max-height: 150px;
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