import { ThemeProvider } from "styled-components";
import { Input, TaskDiv } from "./Components.Styled/styled";
import GlobalStyles from "./Components.Styled/styled";
import Tasks from "./tasks";
// import DltButton from "";
import { DltButton } from "./Components.Styled/styled";

import React, { useState, KeyboardEvent } from "react";

function App() {
  const theme = {
    colors: {
      body: "#F8F8F8",
      input: "#e5e5e7",
    },
  };
  ////
  const [inputValue, setInputValue] = useState<string>("");
  const [textList, setTextList] = useState<string[]>([]);
  //
  const [divList, setDivList] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    const updatedItems = [...textList];
    updatedItems.splice(index, 1);
    setTextList(updatedItems);
  };

  ///
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTextList([...textList, inputValue]);
      setInputValue("");
      // setDivList([...divList, inputValue]);
    }
  };

  const [underlined, setUnderlined] = useState<boolean>(false);

  const toggleUnderline = () => {
    setUnderlined((prevUnderlined) => !prevUnderlined);
  };
  ////
  const getRandomColor = () => {
    const borderColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return borderColor;
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Input
          placeholder="new task"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        ></Input>
        <div>
          {textList.map((text, index, color, borderColor) => (
            <Tasks
              key={index}
              prop={text}
              color={color}
              borderColor={borderColor}
              btnStyle={{ borderColorr: getRandomColor() }}
              funct={() => handleDelete(index)}
            ></Tasks>
          ))}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
