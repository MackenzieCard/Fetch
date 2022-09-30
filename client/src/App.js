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
import {UserContext} from "./UserContext"; 
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const {currentUser} = useContext(UserContext)
  const {user} = useAuth0()
  console.log(user)
  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
        <Sidebar />
        <Routes>
          {/* <Route path="/" element={ user ? <Homepage /> : <Navigate to= "/login" /> } /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={!user ? <LogIn /> : <Navigate to= "/" />} />
          <Route path="/logout" element={user ? <LogOut /> : <Navigate to="/" />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/playdatepage" element={<PlayDatePage />} />
        </Routes>
        </Main>
    </BrowserRouter>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
/* display: flex; */

`;

const Main = styled.div`
display: flex;
`;