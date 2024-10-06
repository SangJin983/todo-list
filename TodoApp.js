import { TodoBoard } from "./TodoBoard.js";

export class TodoApp {
  #$todoInput;
  #$addButton;
  #$todoBoard;
  #todoBoard;

  constructor() {
    this.#$todoInput = document.querySelector(".todo-input");
    this.#$addButton = document.querySelector(".add-button");
    this.#$todoBoard = document.querySelector(".todo-board");

    this.#todoBoard = new TodoBoard(this.#$todoBoard);
    this.#initialize();
  }

  #initialize() {
    this.#$addButton.addEventListener("click", this.#handleAddTodo);
    this.#$todoInput.addEventListener("keypress", this.#handleEnterKeyPress);
  }

  #handleAddTodo = () => {
    const todoContent = this.#$todoInput.value.trim();

    if (!todoContent) {
      alert("할 일을 입력하세요!");
      return;
    }

    this.#todoBoard.addTodoList(todoContent);
    this.#$todoInput.value = "";
  };

  #handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      this.#$addButton.click();
    }
  }
}
