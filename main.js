import { TodoList } from "./TodoList.js";
import { TodoBoard } from "./TodoBoard.js";
import { TodoApp } from "./TodoApp.js";

const todoApp = new TodoApp(new TodoBoard(new TodoList()));
