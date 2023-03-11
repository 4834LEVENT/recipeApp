import styled from "styled-components";
import Flex from "../../components/globalstyles/Flex.style";

export const DetailsContainer = styled(Flex)`
  flex-direction: column;
  background: #92c2f1;
  min-height: calc(100vh-75px);
  padding: 0.5rem;
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border-radius: 5px;
  background: white;
`;

export const ImgContainer = styled.div`
  border: 1px solid #92c2f1;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: centr;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  margin: 25px;
  img {
    width: 200px;
  }
`;

export const Ing = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
`;
export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
  background: white;
`;
