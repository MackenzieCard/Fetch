import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import ProfilePage from "./ProfilePage";
import PlayDatePage from "./PlayDatePage";
import LogIn from "./SignIn/LogIn";
import LogOut from "./SignIn/Logout";

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Main>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
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