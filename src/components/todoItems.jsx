import react, { useState } from "react";

export default function todoItems(props) {
  let [todoIsDone, setTodoIsDone] = useState(false);

  function clickEvent() {
    setTodoIsDone((pre) => {
      return !pre;
    });

    console.log("clicked", todoIsDone);
  }

  return (
    <>
      <li
        onClick={clickEvent}
        className="lists"
        style={{
          textDecoration: todoIsDone ? "line-through" : "",
        }}
      >
        {props.lists}
      </li>
      <button
        className="deleteBTN"
        onClick={() => {
          return props.onCheck(props.id);
        }}
      >
        {props.btn}
      </button>
    </>
  );
}
