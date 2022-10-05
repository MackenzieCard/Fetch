import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {

  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
const {user} = useAuth0()
// fetch users from /api/get-users
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
    .then(res => {if (!currentUser) setCurrentUser(res.data)
      sessionStorage.setItem("user-id", res.data.id)
    })
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        currentUserData, 
        setCurrentUserData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};