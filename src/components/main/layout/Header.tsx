import styled from "styled-components";
import { RxHamburgerMenu as RxMenuIcon } from "react-icons/rx";
import {
  IoSearchOutline as IoSearchOutlineIcon,
  IoNotificationsOutline as IoNotificationsIcon,
  IoPersonCircleOutline as IoPersonCircleOutlineIcon,
} from "react-icons/io5";

const WEB_HEIGHT = 56;

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

const SearchBar = styled.div`
  display: flex;
  /* align-items: center; */
  flex: 0 1 728px;
  border: 1px solid #456f86;
  background-color: transparent;
  border-radius: 1em;
`;

const SearchBox = styled.div`
  flex: 1;

  display: flex;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 40px;

  border-radius: 0 1em 1em 0;
  background-color: #10293b;
`;

const MenuArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

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

      <SearchBar>
        <SearchBox>
          <div>TextField</div>
        </SearchBox>
        <SearchButton>
          <IoSearchOutlineIcon size={"24px"} />
        </SearchButton>
      </SearchBar>
      <MenuArea>
        <IoNotificationsIcon size={"24px"} />
        <IoPersonCircleOutlineIcon size={"24px"} />
      </MenuArea>
    </RootStyle>
  );
};

export default Header;
