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
  ////
  const [inputValue, setInputValue] = useState<string>("");
  const [textList, setTextList] = useState<string[]>([]);
  //
  const [divList, setDivList] = useState<string[]>([]);
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
        <Tasks></Tasks>
        <Tasks></Tasks>
        {/* <button onClick={toggleUnderline}>Underline Text</button> */}
        <div>
          {textList.map((text, index) => (
            <p
              key={index}
              style={{ textDecoration: underlined ? "underline" : "none" }}
            >
              Text: {text}
            </p>
          ))}
        </div>
        {/* <Tasks>
          {divList.map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        </Tasks> */}
      </ThemeProvider>
    </>
  );
}

export default App;
