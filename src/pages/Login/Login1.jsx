import Login1Style, {
  FormContainer,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login1.style";
import Header from "../../components/header/Header";
import mealsvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();
  const userIn = {
    username: "ahmet",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userIn));
    navigate("-1");
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealsvg} />
        <Header title="<LVCR/>">RECİPE</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
          ></StyledInput>
          <StyledInput
            type="password"
            placeholder="password"
            required
          ></StyledInput>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login1;
