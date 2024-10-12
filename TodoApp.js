import { getTodoInput, getAddButton, initializeDom } from "./TodoUtils.js";
import { TodoEventBus } from "./TodoEventBus.js";

export class TodoApp {
  #$todoInput;
  #$addButton;
  #todoBoard;
  #storage;

  constructor(board, storage) {
    initializeDom(() => {
      this.#$todoInput = getTodoInput();
      this.#$addButton = getAddButton();
      this.#todoBoard = board;
      this.#storage = storage;

      this.#initialize();
      this.#loadTodos();
    });
  }

  #initialize() {
    this.#$addButton.addEventListener("click", this.#handleAddTodo);
    this.#$todoInput.addEventListener("keypress", this.#handleEnterKeyPress);
    TodoEventBus.subscribe("todoDeleted", this.#saveTodos);
  }

  #loadTodos() {
    const todos = this.#storage.load();
    todos.forEach((todo) => this.#addTodo(todo));
  }

  #saveTodos = () => {
    const todos = this.#todoBoard.getTodos();
    this.#storage.save(todos);
  };

  #addTodo = (content) => {
    this.#todoBoard.addTodoList(content);
  };

  #handleAddTodo = () => {
    const todoContent = this.#$todoInput.value.trim();

    if (!todoContent) {
      alert("할 일을 입력하세요!");
      return;
    }

    this.#addTodo(todoContent);
    this.#saveTodos();
    this.#$todoInput.value = "";
  };

  #handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      this.#$addButton.click();
    }
  };
}
