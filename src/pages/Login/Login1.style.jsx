import styled from "styled-components";
import Flex from "../../components/globalstyles/Flex.style";

export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled(Flex)`
  width: 30rem;
  height: 30rem;
  max-width: 40rem;
  background: rgba(0, 173, 181, 0.5);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 0.5rem;
  flex-direction: column;
`;

export const Header = styled(Flex)`
  flex-direction: row;
  color: white;
  font-size: 3rem;
`;
export const StyledButton = styled.button`
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  margin: 1rem;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    opacity: 0.8;
    box-shadow: 2px 2px 2px white;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 1rem;
  width: 15rem;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
  border-radius: 7px;
  &:hover {
    box-shadow: 2px 2px 2px 2px white;
  }
`;
