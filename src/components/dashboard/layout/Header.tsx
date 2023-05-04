import styled from "styled-components";

const RootStyle = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <RootStyle>
      <div>sidbar toggle</div>
      <div>logo area</div>
      <div>search bar</div>
      <div>profile area</div>
    </RootStyle>
  );
};

export default Header;
