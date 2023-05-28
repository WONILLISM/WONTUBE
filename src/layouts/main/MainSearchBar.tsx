import { IoSearchOutline as IoSearchOutlineIcon } from "react-icons/io5";
import styled from "styled-components";
import Input from "../../components/Input";

const MainSearchBar = () => {
  return (
    <MainSearchBarStyle>
      <SearchTextField>
        <Input
          type="text"
          name="search"
          placeholder="검색어를 입력해주세요."
          autoComplete="off"
        />
      </SearchTextField>
      <SearchButton>
        <IoSearchOutlineIcon size={"24px"} />
      </SearchButton>
    </MainSearchBarStyle>
  );
};

const MainSearchBarStyle = styled.div`
  display: flex;
  /* align-items: center; */
  flex: 0 1 728px;
  border: 1px solid #456f86;
  background-color: transparent;
  border-radius: 1em;
`;

const SearchTextField = styled.div`
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

export default MainSearchBar;
