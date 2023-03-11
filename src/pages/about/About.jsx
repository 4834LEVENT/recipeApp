import React from "react";
import styled from "styled-components";
import myimage from "../../assets/myimage.jpg";
import Header from "../../components/Header";

import "./about.css";
import { AboutContainer, InfoContainer, ProfileImg } from "./About.style";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={myimage} />
      <InfoContainer>
        <h2> Hi, I' m Levent </h2>{" "}
        <h3> I'm currently learning fullstack development languages</h3>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
