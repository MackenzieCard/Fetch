import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./src/Components/GlobalStyles";

import Header from "./src/Components/Header";
import Sidebar from "./src/Components/Sidebar";
import Homepage from "../Homepage";
import ProfilePage from "./src/Pages/ProfilePage";
import PlayDatePage from "./src/Pages/PlayDatePage";
import LogIn from "./src/SignIn/LogIn";
import LogOut from "./src/SignIn/Logout";

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