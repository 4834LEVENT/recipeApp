import styled from "styled-components";
import Flex from "../globalstyles/Flex.style";

const HeaderContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.mainColor};
  flex-direction: column;
`;

export default HeaderContainer;

export const MainHeader = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  outline: none;
  border-radius: 5px;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
`;

export const FoodButton = styled.button`
  background: #e1f1dd;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
`;

export const FoodSelect = styled.select`
  border-radius: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;
