import { getTodoBoard } from "./TodoUtils.js"

export class TodoBoard {
  #board;
  #listFactory;

  constructor(listFactory) {
    this.#board = getTodoBoard();
    this.#listFactory = listFactory;
  }

  addTodoList(content) {
    const todoListElement = this.#listFactory.createElement(content);
    this.#board.append(todoListElement);
  }
}
