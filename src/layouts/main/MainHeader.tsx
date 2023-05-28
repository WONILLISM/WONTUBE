import styled from "styled-components";
import { RxHamburgerMenu as RxMenuIcon } from "react-icons/rx";
import {
  IoNotificationsOutline as IoNotificationsIcon,
  IoPersonCircleOutline as IoPersonCircleOutlineIcon,
} from "react-icons/io5";
import MainSearchBar from "./MainSearchBar";

const WEB_HEIGHT = 56;

interface HeaderProps {
  handleSidebarOpen: () => void;
}

const Header = ({ handleSidebarOpen }: HeaderProps) => {
  return (
    <RootStyle>
      <NavArea>
        <IconButton onClick={handleSidebarOpen}>
          <RxMenuIcon size="24px" />
        </IconButton>
        <Logo>
          <img src="./assets/logo1.png" width={140} />
        </Logo>
      </NavArea>

      <MainSearchBar />
      <MenuArea>
        <IoNotificationsIcon size={"24px"} />
        <IoPersonCircleOutlineIcon size={"24px"} />
      </MenuArea>
    </RootStyle>
  );
};

const RootStyle = styled.div`
  width: 100%;
  padding: 0 16px;

  z-index: 999;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${WEB_HEIGHT}px;

  background-color: #0c131c;
`;

const NavArea = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40;
  height: 40;
  padding: 8px;

  border-radius: 50%;

  &:hover {
    background-color: #ffffff22;
  }
`;
const Logo = styled.div`
  margin-left: 20px;
`;

const MenuArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default Header;
