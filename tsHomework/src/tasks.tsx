import React from "react";
import { useState } from "react";
import {
  TaskDiv,
  ChooseBtn,
  TaskLis,
  TaskDate,
  DltButton,
} from "./Components.Styled/styled";
const Tasks = () => {
  const [underlined, setUnderlined] = useState<boolean>(false);

  const toggleUnderline = () => {
    setUnderlined((prevUnderlined) => !prevUnderlined);
  };
  return (
    <TaskDiv>
      <ChooseBtn onClick={toggleUnderline}></ChooseBtn>
      <TaskLis
        style={{
          textDecoration: underlined ? "line-through" : "none",
          //   ChooseBtn: backgroundColor === black,
        }}
      >
        play chess
      </TaskLis>
      <TaskDate>27 mart</TaskDate>
      <DltButton></DltButton>
    </TaskDiv>
  );
};

export default Tasks;
