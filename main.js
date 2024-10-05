import { TodoBoard } from "./TodoBoard.js";

document.addEventListener("DOMContentLoaded", () => {
  const $todoInput = document.querySelector(".todo-input");
  const $addButton = document.querySelector(".add-button");
  const $todoBoard = document.querySelector(".todo-board");
  const todoBoard = new TodoBoard($todoBoard)

  // 버튼 클릭 시 To-Do 항목 추가
  $addButton.addEventListener("click", () => {
    const todoContent = $todoInput.value.trim();

    if (!todoContent) {
      alert("할 일을 입력하세요!");
      return;
    }
    
    todoBoard.addTodoList(todoContent);
    $todoInput.value = "";
  });

  // Enter 키로 To-DO 항목 추가
  $todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      $addButton.click();
    }
  });
});
