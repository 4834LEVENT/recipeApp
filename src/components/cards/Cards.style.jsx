import styled from "styled-components";
import Flex from "../globalstyles/Flex.style";

export const MainCardContainer = styled(Flex)`
  flex-direction: row;
`;

export const CardContainer = styled(Flex)`
  flex-direction: column;
  height: 20rem;
  width: 20rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.7rem;
  box-sizing: 3px 3px 3px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const CardHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const CardImage = styled.img`
  height: 10rem;
  border-radius: 10px;
`;

export const CardButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 0.7rem;
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
