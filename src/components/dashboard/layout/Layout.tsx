import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const WEB_HEIGHT = 56;

const MainWrapper = styled.div`
  margin-top: ${WEB_HEIGHT}px;
  display: flex;
`;

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <RootStyle>
      <Header />
      <MainWrapper>
        <Sidebar />
        <Outlet />
      </MainWrapper>
    </RootStyle>
  );
};

export default Layout;
