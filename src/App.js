import styled, { css, keyframes } from "styled-components";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import HomeBody from "./components/home-body/HomeBody";

import BoxContainer from "./ui/StyledBoxContainer";

import CloseButton from "./ui/CloseButton";

import Footer from "./components/footer/Footer";

import UserDropDown from "./components/navbar/UserDropDown";
import Blog from "./components/blog/Blog";
import BlogSlick from "./components/blog/BlogSlick";

function App() {
  return (
    <>
      <NavBar />
      <HomeBody />
      <Blog />
      <BlogSlick />
    </>
  );
}

export default App;
