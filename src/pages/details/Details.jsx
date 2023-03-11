import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailPart,
  DetailsContainer,
  HeaderContainer,
  ImgContainer,
  Ing,
  OtherPart,
} from "./Details.style";
import dietSvg from "../../assets/diet.svg";
import defaultImg from "../../assets/default-image.jpg";

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <DetailsContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart wrap="wrap">
        <OtherPart>
          <h4>NUTRİENS</h4>
          <p>
            {state.totalNutrients.CA.label}:{}
            {Number(Math.random(state.totalNutrients.CA.quantity)).toFixed(2)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label}:{}
            {Number(Math.random(state.totalNutrients.CHOCDF.quantity)).toFixed(
              2
            )}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label}:{}
            {Number(Math.random(state.totalNutrients.CHOLE.quantity)).toFixed(
              2
            )}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label}:{}
            {Number(
              Math.random(state.totalNutrients.ENERC_KCAL.quantity)
            ).toFixed(2)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>

          {state.digest.slice(0, 4).map((item, i) => (
            <p key={i}>
              {item.label}:{Number(Math.round(item.total))}
            </p>
          ))}
          <p>{state.totalWeight}</p>
          <p>Calories:{Number(Math.round(state.calories)).toFixed(2)}</p>
        </OtherPart>
        <ImgContainer>
          <img src={state.image || defaultImg} alt={state.label} />
        </ImgContainer>
        <Ing>
          {state.ingredientLines.map((line, index) => (
            <div>
              <p key={index}>
                {index + 1}-{line}
              </p>
            </div>
          ))}
        </Ing>
      </DetailPart>
    </DetailsContainer>
  );
};

export default Details;
