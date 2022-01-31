import React from "react";
import { TodoItem } from "./TodoItem";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>
      {todos.length === 0
        ? "No Todos to display"
        : todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />;
          })}
    </div>
  );
};

export default Todos;
