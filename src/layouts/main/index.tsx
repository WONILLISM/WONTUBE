import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./MainHeader";
import Sidebar from "./MainSidebar";
import { useState } from "react";

const WEB_HEIGHT = 56;

const MainWrapper = styled.div<{ ml: number }>`
  margin-top: ${WEB_HEIGHT}px;
  margin-left: ${(props) => props.ml}px;
  display: flex;
`;

const RootStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainLayout = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <RootStyle>
      <Header handleSidebarOpen={handleSidebarOpen} />
      <Sidebar open={openSidebar} />
      <MainWrapper ml={openSidebar ? 160 : 72}>
        <Outlet />
      </MainWrapper>
    </RootStyle>
  );
};

export default MainLayout;
