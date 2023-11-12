import styled from "styled-components";
import React from "react";

const StyledCarouselDetail = styled.div`
  margin-top: 20rem;
  width: 29rem;
  height: 35rem;
  background-color: lightpink;
  border-radius: 4%;

  & a {
    font-weight: 900;
    font-size: 1.5rem;
  }

  & p {
    margin-top: 1rem;
    color: lightslategray;
    font-weight: 300;
    font-size: 1rem;
  }
`;

const StyledImg = styled.img`
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  width: 100%;
  height: 26rem;
`;

export default function CarouselDetail({ item }) {
  return (
    <StyledCarouselDetail style={{ margin: "40px" }}>
      <StyledImg src={item.image} alt="" />
      <div style={{ marginTop: "1.6rem", marginLeft: "1.3rem" }}>
        <a href={item.linkurl}>{item.title}</a>
        <p>{item.date} </p>
      </div>
    </StyledCarouselDetail>
  );
}
