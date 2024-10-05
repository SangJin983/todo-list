export class TodoList {
  #content;

  constructor(content) {
    this.#content = content;
  }

  createElement() {
    const $todoList = document.createElement("li");

    $todoList.textContent = this.#content;
    $todoList.append(this.#createDeleteButton());

    return $todoList;
  }

  #createDeleteButton() {
    const $deleteButton = document.createElement("button");
    
    $deleteButton.textContent = "삭제";
    $deleteButton.className = "delete";
    
    this.#addDeleteEventListener($deleteButton);

    return $deleteButton;
  }

  #addDeleteEventListener(button) {
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
  }
}
