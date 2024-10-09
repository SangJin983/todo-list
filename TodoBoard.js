import { getTodoBoard } from "./TodoUtils.js";

export class TodoBoard {
  #board;
  #listFactory;

  constructor(listFactory) {
    this.#board = getTodoBoard();
    this.#listFactory = listFactory;
  }

  addTodoList(content, onDeleteCallback) {
    const todoListElement = this.#listFactory.createElement(
      content,
      onDeleteCallback
    );
    this.#board.append(todoListElement);
  }

  getTodos() {
    return Array.from(this.#board.children)
      .map((todo) => todo.textContent.replace("삭제", "").trim())
      .filter((todo) => todo !== "");
  }
}
