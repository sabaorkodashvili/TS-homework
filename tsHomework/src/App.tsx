import { ThemeProvider } from "styled-components";
import { Input, TaskDiv } from "./Components.Styled/styled";
import GlobalStyles from "./Components.Styled/styled";
import Tasks from "./tasks";
import React, { useState, KeyboardEvent } from "react";

function App() {
  const theme = {
    colors: {
      body: "#F8F8F8",
      input: "#e5e5e7",
    },
  };
  const [inputValue, setInputValue] = useState<string>("");
  const [textList, setTextList] = useState<string[]>([]);

  const [items, setItems] = useState<string[]>([]);

  const handleDelete = (index: number) => {
    const updatedItems = [...textList];
    updatedItems.splice(index, 1);
    setTextList(updatedItems);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const [colors, setColors] = useState<string[]>([]);

  const getRandomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTextList([...textList, inputValue]);
      // setDivList([...divList, inputValue]);
      setInputValue("");
    }
  };
  const [underlined, setUnderlined] = useState<boolean>(false);
  const toggleUnderline = () => {
    setUnderlined((prevUnderlined) => !prevUnderlined);
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
          {textList.map((text, index, color) => (
            <Tasks
              key={index}
              prop={text}
              color={color}
              funct={() => handleDelete(index)}
              BoxColor={{ borderColor: getRandomColor() }}
            ></Tasks>
          ))}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
