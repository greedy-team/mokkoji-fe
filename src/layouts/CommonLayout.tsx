import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./sidebar/SideBar";

const Background = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const MainContents = styled.div`
  padding: 1%;
  width: auto;
`;

const MainContentsSection = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 78vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #f9fafb;
`;

function CommonLayout() {
  return (
    <Background>
      <Header />
      <MainContentsSection>
        <SideBar />
        <MainContents>
          <Outlet />
        </MainContents>
      </MainContentsSection>
      <Footer />
    </Background>
  );
}

export default CommonLayout;
