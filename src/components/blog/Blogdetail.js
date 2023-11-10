import React from "react";
import styled from "styled-components";

const StyledGrid_1_BD = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & .item {
    padding: 0.7rem;
  }

  & h4 {
    margin-top: 0.5rem;
    font-weight: 800;
    font-size: 2rem;
  }

  & p {
    margin-top: 1rem;
    color: lightslategray;
  }

  & img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export default function Blogdetail({ item }) {
  console.log("item", item);
  return (
    <div>
      <StyledGrid_1_BD>
        {/* <img
          src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-33.jpg"
          alt=""
          className="item item-1"
        />
        <div className="item item-2">
          <h>Tilte</h>
          <p>Content</p>
        </div> */}
        <div className="item">
          {/* <img src={item.image} alt="" className="item-1" />
          <div className="item-2">
            <a href={item.linkurl}>{item.title}</a>
            <p>{item.date}</p>
          </div> */}
        </div>
      </StyledGrid_1_BD>
    </div>
  );
}
