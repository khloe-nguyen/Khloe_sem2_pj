import React from "react";
import styled from "styled-components";

const StyledGrid_1_BD = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & a {
    font-weight: 900;
    font-size: 1.5rem;
  }

  & p {
    margin-top: 1rem;
    color: lightslategray;
    font-weight: 300;
    font-size: 1.1rem;
  }

  & img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    border-radius: 9px;
  }
`;

export default function Blogdetail({ item }) {
  return (
    <StyledGrid_1_BD>
      <img src={item.image} alt="" />
      <div style={{ marginTop: "0.3rem", marginLeft: "1.3rem" }}>
        <a href={item.linkurl}>{item.title}</a>
        <p>{item.date} </p>
      </div>
    </StyledGrid_1_BD>
  );
}
