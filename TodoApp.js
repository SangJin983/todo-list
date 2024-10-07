import { getTodoInput, getAddButton, initializeDom } from "./TodoUtils.js";

export class TodoApp {
  #$todoInput;
  #$addButton;
  #todoBoard;

  constructor(board) {
    initializeDom(() => {
      this.#$todoInput = getTodoInput();
      this.#$addButton = getAddButton();
      this.#todoBoard = board;

      this.#initialize();
    });
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
  };
}
