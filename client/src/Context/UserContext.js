import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {

  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);

// fetch users from /api/get-users
  useEffect(() => {
    fetch("/api/get-users")
      .then((res) => res.json())
      .then((userData) => {
        setUsers(userData.data);
      });
  }, []);

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