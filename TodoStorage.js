export class TodoStorage {
  save = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  load = () => {
    const todos = localStorage.getItem("todos");
    return JSON.parse(todos ?? "[]");
  };
}
