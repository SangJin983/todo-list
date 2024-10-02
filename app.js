document.addEventListener("DOMContentLoaded", () => {
  // 요소를 설정해야죠.
  const $todoInput = document.querySelector(".todo-input");
  const $addButton = document.querySelector(".add-button");
  const $todoList = document.querySelector(".todo-list");

  // 이벤트가 발생했을 때, 동작할 함수
  $addButton.addEventListener("click", () => {
    const todoContent = $todoInput.value.trim();

    if (todoContent) {
      // 리펙토링 해야되네, OOP로?
      const $todoItem = document.createElement("li");
      $todoItem.textContent = todoContent;

      const $deleteButton = document.createElement("button");
      $deleteButton.textContent = "삭제";
      $deleteButton.className = "delete";
      $deleteButton.addEventListener("click", () => {
        $todoItem.remove();
      });

      $todoItem.append($deleteButton);
      $todoList.append($todoItem);

      $todoInput.value = "";
    } else {
      alert("할 일을 입력하세요!");
    }
  });

  $todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      $addButton.click();
    }
  });
});
