import { InputHTMLAttributes } from "react";
import styled from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface Props extends InputProps {
  name: string;
  label?: string;
}

const Input = ({ name, label, ...rest }: Props) => {
  return (
    <Wrapper>
      {label && <div>{label}</div>}
      <InputStyle name={name} {...rest} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  cursor: text;

  margin: 8px 16px;
`;

const InputStyle = styled.input`
  all: unset;
  /* border: 1px solid white; */
  width: inherit;
  flex: 1;
`;

export default Input;
