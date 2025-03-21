import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background:rgb(222, 249, 251);
  border-radius: 10px;
  border: 2px solid rgb(72, 109, 196);
  padding: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1.3rem;
  }
`;

type ButtonWrapperProps = {
  $correct: boolean;
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(to left,rgb(90, 195, 139),rgb(3, 156, 72))"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(to left,rgb(9, 9, 9),rgb(135, 136, 136))"};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
