import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncomplateTodos } from "./components/IncomplateTodos";
import { ComplateTodos } from "./components/ComplateTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if ("" === todoText) return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onClickComplate = (index) => {
    const newIncompateTodos = [...incomplateTodos];
    const todo = newIncompateTodos.splice(index, 1);
    setIncomplateTodos(newIncompateTodos);

    const newComplateTodos = [...complateTodos, todo];
    setComplateTodos(newComplateTodos);
  };

  const onClickBack = (index) => {
    const newCompateTodos = [...complateTodos];
    const todo = newCompateTodos.splice(index, 1);
    setComplateTodos(newCompateTodos);

    const newIncomplateTodos = [...incomplateTodos, todo];
    setIncomplateTodos(newIncomplateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncomplateTodos
        todos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <ComplateTodos todos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
