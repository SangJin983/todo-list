import { TodoListElementFactory } from "./TodoListElementFactory.js";
import { TodoStorage } from "./TodoStorage.js";
import { TodoBoard } from "./TodoBoard.js";
import { TodoApp } from "./TodoApp.js";

const todoApp = new TodoApp(
  new TodoBoard(new TodoListElementFactory()), new TodoStorage()
);
