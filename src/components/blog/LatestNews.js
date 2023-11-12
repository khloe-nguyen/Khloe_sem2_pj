import React from "react";
import Blogdetail from "./Blogdetail";
import { blogDetailArr } from "../../data/data";
import styled from "styled-components";

const StyleLatestNewsBlock = styled.div`
  padding: 3rem;
`;
const StyledBlogList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  /* background-color: rgb(238, 237, 237); */
  margin: auto;
  width: 90%;
  height: 100%;
  column-gap: 2rem;
  row-gap: 2rem;
`;

const StyledTitle = styled.p`
  width: 60rem;
  margin: 1rem;
  font-size: 1.7rem;
  font-weight: 600;
  padding-left: 3rem;
`;

export default function LatestNews() {
  return (
    <StyleLatestNewsBlock>
      <StyledTitle>Lastest News</StyledTitle>
      <StyledBlogList>
        {blogDetailArr.slice(0, 4).map((item, index) => {
          return <Blogdetail item={item} key={index} />;
        })}
      </StyledBlogList>
    </StyleLatestNewsBlock>
  );
}
