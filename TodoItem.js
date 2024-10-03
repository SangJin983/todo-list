export class TodoItem {
  #content;

  constructor(content) {
    this.#content = content;
  }

  createElement() {
    const $todoItem = document.createElement("li");

    $todoItem.textContent = this.#content;
    $todoItem.append(this.#createDeleteButton());

    return $todoItem;
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
