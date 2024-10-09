export class TodoListElementFactory {
  createElement(content, onDeleteCallback) {
    const $todoList = document.createElement("li");

    $todoList.textContent = content;
    $todoList.append(this.#createDeleteButton(onDeleteCallback));

    return $todoList;
  }

  #createDeleteButton(onDeleteCallback) {
    const $deleteButton = document.createElement("button");

    $deleteButton.textContent = "삭제";
    $deleteButton.className = "delete";

    this.#addDeleteEventListener($deleteButton, onDeleteCallback);

    return $deleteButton;
  }

  #addDeleteEventListener(button, onDeleteCallback) {
    button.addEventListener("click", () => {
      button.parentElement.remove();
      onDeleteCallback();
    });
  }
}
