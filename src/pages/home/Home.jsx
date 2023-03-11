import axios from "axios";
import { useEffect, useState } from "react";
import HomeStyle, { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import HeaderMain from "../../components/headerMain/HeaderMain";
import Cards from "../../components/cards/Cards";
import svgHome from "../../assets/home.svg";

const Home = () => {
  const mealType = ["Breakfast", "Launch", "Dinner", "Snack", "TeaTime"];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, SetRecipes] = useState(null);

  const API_KEY = process.env.REACT_APP_Api_Key;
  const API_ID = process.env.REACT_APP_Api_Id;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);

        SetRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    }
    //  else {
    //   alert(` Enter Your Meal`);
    // }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(recipes);
  return (
    <div>
      <HeaderMain
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={svgHome} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>This Food Can Not Be Found</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipe={recipes} />}
    </div>
  );
};

export default Home;
