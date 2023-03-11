import CardStyle, {
  CardButton,
  CardContainer,
  CardHeader,
  CardImage,
  MainCardContainer,
} from "./Cards.style";
import defaultImg from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Cards = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <MainCardContainer wrap="wrap">
      {recipe.map(({ recipe }, index) => {
        const { label, image } = recipe;
        return (
          <CardContainer key={index}>
            <CardHeader>{label}</CardHeader>
            <CardImage src={image || defaultImg}></CardImage>
            <CardButton
              onClick={() =>
                navigate("detail", { state: recipe, replace: false })
              }
            >
              VİEW MORE
            </CardButton>
          </CardContainer>
        );
      })}
    </MainCardContainer>
  );
};

export default Cards;
