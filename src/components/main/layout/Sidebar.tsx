import styled, { css } from "styled-components";
import {
  MdSubscriptions as MdSubscriptionsIcon,
  MdHomeFilled as MdHomeFilledIcon,
  MdOutlineEnergySavingsLeaf as MdOutlineEnergySavingsLeafIcon,
} from "react-icons/md";

const MenuItem = styled.li<{
  open: boolean;
}>`
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #1f4457;
  }

  ${(props) =>
    props.open
      ? css`
          min-height: 48px;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 0 12px;
          font-size: 0.8em;
        `
      : css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 16px 0 14px;
          font-size: 0.6em;
        `}
`;

const MenuList = styled.ul<{ width: number }>`
  display: flex;
  flex-direction: column;

  padding: 10px;

  width: ${(props) => props.width}px;
`;

const RootStyle = styled.div`
  min-width: 68px;
  margin-top: 56px;
  position: fixed;
  height: 100%;
  z-index: 9;
`;

interface SidebarProps {
  open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
  return (
    <RootStyle>
      <MenuList width={open ? 160 : 72}>
        <MenuItem open={open} onClick={() => {}}>
          <MdHomeFilledIcon size={24} />
          <div>홈</div>
        </MenuItem>
        <MenuItem open={open}>
          <MdSubscriptionsIcon size={24} />
          <div>구독</div>
        </MenuItem>
        <MenuItem open={open}>
          <MdOutlineEnergySavingsLeafIcon size={24} />
          <div>Shorts</div>
        </MenuItem>
      </MenuList>
    </RootStyle>
  );
};

export default Sidebar;
