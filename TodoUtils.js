const getElement = (selector) => document.querySelector(selector);

const getTodoInput = () => getElement(".todo-input");
const getAddButton = () => getElement(".add-button");
const getTodoBoard = () => getElement(".todo-board");

const initializeDom = (callback) => {
  document.addEventListener("DOMContentLoaded", () => {
    callback();
  });
};

export { getTodoInput, getAddButton, getTodoBoard, initializeDom };
