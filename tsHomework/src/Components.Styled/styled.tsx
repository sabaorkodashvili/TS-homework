import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Input = styled.input`
  // Fixed (517px)
  width: 517px;
  height: 48px;
  background-color: #e5e5e7;
  color: black;
  height: 30px;
  border-radius: 12px;
  padding: 6px;

  &:hover {
    background-color: #d3d1e2;
  }
`;

const GlobalStyles = createGlobalStyle`
body{
  background-color: ${({ theme }) => theme.colors.body}
}
`;
export default GlobalStyles;

export const ThemeProvider = styled.body`
  background-color: ${({ theme }) => theme.colors.body};
`;

export const ChooseBtn = styled.button`
  // width: 19px;
  height: 19px;
  border-radius: 6px;
  border-color: #eaebed;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: "#EAEBED";
  // background-color: "red";
  // background-color: "white";
  // background-color: "black";
  // border: 1px solid red;
`;
export const TaskLis = styled.p`
  color: "black";
`;
export const TaskDate = styled.p`
  visibility: hidden;
  cursor: pointer;
  // width: 100%;
  background-color: "red";
  margin-right: -100px;
  color: "black";
  background-color: #a0ace71a;
  border-radius: 6px;
  height: 20px;
  font-size: 14px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    // background-color: red;
    // visibility: visible;
  }
`;

export const DltButton = styled.button`
  width: 4px;
  height: 12px;
  style: {boxStyle}; 
  border-radius: 4px;
  // border: 1.4px solid red;
  // &:hover {
  //   background-color: red;
  // }
`;

export const Mark = styled.div`
  color: #eaebed;
`;

export const TaskDiv = styled.div`
  // width: 100%;
  height: 10px;
  border: 1px solid white;
  border-radius: 7px;
  margin-top: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;

  // ${ChooseBtn} :hover {
  //   // TaskDate.visibility = visible;
  //   background-color: red;
  //   display: none;
  // }
  // ${TaskDate}:hover {
  //   background-color: red;
  //   // display: none;
  //   visibility: visible;
  //   display: block;
  // }

  &:hover {
    // background-color: red;
    ${TaskDate} {
      visibility: visible;
    }
  }
`;
