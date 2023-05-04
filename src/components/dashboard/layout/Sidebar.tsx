import styled from "styled-components";

const MenuItem = styled.li``;

const MenuList = styled.ul``;

const RootStyle = styled.div``;
const Sidebar = () => {
  return (
    <RootStyle>
      <MenuList>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
        <MenuItem>item 3</MenuItem>
        <MenuItem>item 4</MenuItem>
        <MenuItem>item 5</MenuItem>
      </MenuList>
    </RootStyle>
  );
};

export default Sidebar;
