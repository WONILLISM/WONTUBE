import styled from "styled-components";
import YoutubeLogin from "../components/YoutubeLogin";

const RootStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 320px;

  background-color: transparent;
  box-shadow: 0 0 16px 4px #085168, 0 0 4px 2px #9ab3c3;
  border-radius: 8px;
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 32px;
`;

const ActionArea = styled.div`
  padding: 20px;
`;

const Home = () => {
  return (
    <RootStyle>
      <SignInBox>
        <LogoArea>
          <img src="./assets/logo8.png" width={100} />
        </LogoArea>
        <ActionArea>
          <YoutubeLogin />
        </ActionArea>
      </SignInBox>
    </RootStyle>
  );
};

export default Home;
