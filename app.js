import { TodoItem } from "./TodoItem.js";

document.addEventListener("DOMContentLoaded", () => {
  const $todoInput = document.querySelector(".todo-input");
  const $addButton = document.querySelector(".add-button");
  const $todoList = document.querySelector(".todo-list");

  // 버튼 클릭 시 To-Do 항목 추가
  $addButton.addEventListener("click", () => {
    if (!$todoInput.value.trim()) {
      alert("할 일을 입력하세요!");
      return;
    }
    
    const todoContent = $todoInput.value.trim();
    const todoItem = new TodoItem(todoContent);
    const $todoItemElement = todoItem.createElement();

    $todoList.append($todoItemElement);
    $todoInput.value = "";
  });

  // Enter 키로 To-DO 항목 추가
  $todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      $addButton.click();
    }
  });
});
