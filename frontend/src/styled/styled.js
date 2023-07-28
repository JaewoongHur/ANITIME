import { css, styled } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  ${({ $vertical }) =>
    $vertical &&
    css`
      flex-direction: column;
      justify-content: flex-start;
    `}
  margin: auto;
  margin-top: 64px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1240px;
  min-width: 800px;
  min-height: calc(100vh - 160px);
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.background_color || "white"};
  color: ${(props) => props.color || "black"};
  padding: ${(props) => props.padding || "8px"};
  margin: ${(props) => props.margin || "8px"};
`;

export { MainContainer, Button };
