import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./sidebar/SideBar";
import QueryErrorBoundary from "@/services/QueryErrorBoundary";

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContents = styled.div`
  padding: 1%;
  width: 100%;
`;

const MainContentsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1; 
  width: 100%;
  box-sizing: border-box;
  background-color: #f9fafb;
  align-items: stretch; 
`;

function CommonLayout() {
  return (
    <Background>
      <Header />
      <MainContentsSection>
        <SideBar />
        <MainContents>
          <QueryErrorBoundary>
            <Outlet />
          </QueryErrorBoundary>
        </MainContents>
      </MainContentsSection>
      <Footer />
    </Background>
  );
}

export default CommonLayout;
