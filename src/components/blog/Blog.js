import React from "react";
import "./Blog.css";
import styled from "styled-components";
import LatestNews from "./LatestNews";
import BlogSlick from "./BlogSlick";
import BlogCarousel from "./BlogCarousel";

const StyledBlogTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  background-color: beige;
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
  height: 10rem;

  & .item-1 {
    background-color: beige;
  }

  & .item-2 {
    background-color: yellow;
  }
`;

export default function Blog() {
  return (
    <div>
      {/* <StyledBlogTop>
        <div className="item item-1">
          <h4>Tilte</h4>
          <p>Content</p>
        </div>
        <div className="item item-2">Hình</div>
      </StyledBlogTop> */}
      <LatestNews />
      <BlogSlick />
    </div>
  );
}
