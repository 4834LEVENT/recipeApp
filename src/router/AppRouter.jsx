import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalstyles/Global.style";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/Login/Login1";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";

import Login1 from "../pages/Login/Login1";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login1 />} />
        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
