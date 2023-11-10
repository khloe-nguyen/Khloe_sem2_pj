import styled from "styled-components";
import StyledBoxContainer from "../../ui/StyledBoxContainer";

import SignUp from "../signup/SignUp";
import Overlay from "../../ui/Overlay";

import { useState, useEffect, useRef } from "react";

const StyledDropDownContainer = styled(StyledBoxContainer)`
  width: 15rem;
  padding: 10px 0;
  position: absolute;
  /* transform: translateY(-5%); */
  transform: translate(-60%, 5%);

  background-color: white;
  z-index: 9999999;

  & p {
    padding: 0.7rem 1rem;
  }

  & .first {
    border-top-left-radius: 50;
    border-top-right-radius: 50;
  }

  & p:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;

const StyledSignUpOverlay = styled(Overlay)`
  z-index: 4;
`;

const StyledContainer = styled.div``;

function UserDropDown({blur, showDropDown}) {


  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          blur();
        }
        console.log(event.target);
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [showSignUp, setShowSignUp] = useState(false);

  function onShowSignUpHandler() {
    setShowSignUp(true);
    blur();
  }

  
  return (
    <StyledContainer>
      {showDropDown && (
        <StyledDropDownContainer ref={wrapperRef}>
          <p onClick={onShowSignUpHandler}>Signup</p>
          <p>Log in</p>
          <hr />
          <p>Airbnb your home</p>
          <p onClick={() => alert("ngo dinh tan")}>Help Center</p>
        </StyledDropDownContainer>
      )}
      {showSignUp ? (
        <>
          <StyledSignUpOverlay onClick={() => setShowSignUp(false)} /> <SignUp />
        </>
      ) : (
        <></>
      )}
    </StyledContainer>
  );
}

export default UserDropDown;
