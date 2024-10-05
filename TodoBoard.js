import { TodoList } from "./TodoList.js";

export class TodoBoard {
  #board;

  constructor(board) {
    this.#board = board;
  }

  addTodoList(content) {
    const todoList = new TodoList(content);
    const todoListElement = todoList.createElement();
    this.#board.append(todoListElement);
  }
}
