import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import ProfilePage from "./ProfilePage";
import PlayDatePage from "./PlayDatePage";
import LogIn from "./SignIn/LogIn";
import LogOut from "./SignIn/Logout";
import EditProfile from "./EditProfile";

import {UserContext} from "./UserContext"; 
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const {currentUser} = useContext(UserContext)
  const {user, loginWithRedirect} = useAuth0()
  console.log(user)
console.log(currentUser)
  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={!currentUser ? <LogIn /> : <Navigate to= "/" />} />
          <Route path="/logout" element={currentUser ? <LogOut /> : <Navigate to="/" />} />
          <Route path="/profilepage/:id" element={currentUser ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path ="/editprofile" element={ currentUser ? <EditProfile /> : <Navigate to="/login" /> } />
          <Route path="/playdatepage" element={ currentUser ? <PlayDatePage /> : <Navigate to="/login" />} />
        </Routes>
        </Main>
    </BrowserRouter>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`

`;

const Main = styled.div`
display: flex;
`;