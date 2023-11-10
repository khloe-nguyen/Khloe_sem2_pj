import React from "react";
import "./Blog.css";
import Blogdetail from "./Blogdetail";
import styled from "styled-components";

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

const StyledGrid = styled.div`
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
let blogArr = [
  {
    id: 1,
    category: "company",
    title: "Airbnb introduces Guest Favorites",
    date: "08-Nov-23",
    image:
      "https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-33.jpg",
    linkurl: "https://news.airbnb.com/airbnb-introduces-guest-favorites/",
  },
  {
    id: 2,
    category: "o",
    title: "Airbnb introduces Guest Favorites",
    date: "08-Nov-23",
    image:
      "https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-33.jpg",
    linkurl: "https://news.airbnb.com/airbnb-introduces-guest-favorites/",
  },
];

export default function Blog() {
  return (
    <div>
      <StyledBlogTop>
        <div className="item item-1">
          <h4>Tilte</h4>
          <p>Content</p>
        </div>
        <div className="item item-2">Hình</div>
      </StyledBlogTop>
      <StyledGrid className="grid">
        {blogArr
          // .filter((item) => item.category === "o")
          .map((item, index) => {
            return (
              // <div className="item" key={index}>
              //   <img src={item.image} alt="" className="item item-1" />
              //   <div className="item item-2">
              //     <a href={item.linkurl}>{item.title}</a>
              //     <p>{item.date}</p>
              //   </div>
              // </div>
              <Blogdetail item={item} />
            );
          })}
        {/* <div className="item item-1">
          <Blogdetail />
        </div>
        <div className="item item-2">
          <Blogdetail />
        </div>
        <div className="item item-3">
          <Blogdetail />
        </div>
        <div className="item item-4">
          <Blogdetail />
        </div> */}
      </StyledGrid>
    </div>
  );
}
