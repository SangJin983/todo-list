import { getTodoInput, getAddButton, initializeDom } from "./TodoUtils.js";

export class TodoApp {
  #$todoInput;
  #$addButton;
  #todoBoard;
  storage;

  constructor(board, storage) {
    initializeDom(() => {
      this.#$todoInput = getTodoInput();
      this.#$addButton = getAddButton();
      this.#todoBoard = board;
      this.storage = storage;

      this.#initialize();
      this.loadTodos();
    });
  }

  #initialize() {
    this.#$addButton.addEventListener("click", this.#handleAddTodo);
    this.#$todoInput.addEventListener("keypress", this.#handleEnterKeyPress);
  }

  loadTodos() {
    const todos = this.storage.load();
    todos.forEach((todo) =>
      this.#todoBoard.addTodoList(todo, () => {
        this.saveTodos();
      })
    );
  }

  saveTodos = () => {
    const todos = this.#todoBoard.getTodos();
    this.storage.save(todos);
  };

  #handleAddTodo = () => {
    const todoContent = this.#$todoInput.value.trim();

    if (!todoContent) {
      alert("할 일을 입력하세요!");
      return;
    }

    this.#todoBoard.addTodoList(todoContent, () => {
      this.saveTodos();
    });
    this.#$todoInput.value = "";
    this.saveTodos();
  };

  #handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      this.#$addButton.click();
    }
  };
}
