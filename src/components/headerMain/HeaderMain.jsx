import React from "react";
import HeaderContainer, {
  FoodButton,
  FoodInput,
  FoodSelect,
  FormContainer,
  MainHeader,
} from "./HeaderMain.style";

const HeaderMain = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      <MainHeader>RECİPE APP </MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <FoodButton type="submit">SEARCH</FoodButton>
        <FoodSelect
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((itemMeal, index) => (
            <option key={index} value={itemMeal.toLowerCase()}>
              {itemMeal}
            </option>
          ))}
        </FoodSelect>
      </FormContainer>
    </HeaderContainer>
  );
};

export default HeaderMain;
