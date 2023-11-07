import React from "react";
import { format } from "date-fns";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  TaskDiv,
  ChooseBtn,
  TaskLis,
  TaskDate,
  Mark,
  DltButton,
  // HoverArea,
} from "./Components.Styled/styled";

interface MyComponentProps {
  prop: string;
  color: string[];
  borderColor: string[];
  btnStyle: (backgroundColor: string) => void;

  funct: (arg: string) => void;
}

const Tasks: React.FC<MyComponentProps> = ({
  prop,
  color,
  funct,
  borderColor,
  // btnStyle,
}) => {
  const boxStyle = {
    borderColor,
    backgroundColor: color,
  };
  const btnStyle = {
    borderColor,
  };

  const [underlined, setUnderlined] = useState<boolean>(false);

  const toggleUnderline = () => {
    setUnderlined((prevUnderlined) => !prevUnderlined);
  };

  const currentDate = new Date();

  const currentMonth = currentDate.getMonth() + 1; // Months are 0-based, so add 1
  const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
  const currentDay = currentDate.getDate();
  const formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay;

  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);

  const handleDelete = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <TaskDiv>
      <ChooseBtn
        onClick={toggleUnderline}
        style={{
          backgroundColor: underlined ? "#434851" : "#EAEBED",
        }}
      >
        <Mark>
          <FontAwesomeIcon className="icon" icon={faCheck} />
        </Mark>
      </ChooseBtn>
      <TaskLis
        style={{
          textDecoration: underlined ? "line-through" : "none",

          //   ChooseBtn: backgroundColor === black,
        }}
      >
        {prop}
      </TaskLis>
      <TaskDate>
        {formattedDay}/{formattedMonth}
      </TaskDate>
      <DltButton style={btnStyle} onClick={funct}></DltButton>
    </TaskDiv>
  );
};

export default Tasks;
