// This file contains the logic for current user context 

import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {

  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [refreshData, setRefreshData] = useState(false); 
const {user} = useAuth0()

// Fetch users from /api/get-users
  useEffect(() => {
    fetch("/api/get-users")
      .then((res) => res.json())
      .then((userData) => {
        setUsers(userData.data);
      });
  }, []);

// Fetch for getting the current user 
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
    .then(res => {setCurrentUser(res.data)
      console.log(res)
      sessionStorage.setItem("user-id", res.data.id)
    })
  }, [user, refreshData]);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        currentUserData, 
        setCurrentUserData, 
        refreshData, 
        setRefreshData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};