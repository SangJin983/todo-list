// 즉시실행함수를 이용한 모듈형태(연습)
export const TodoStorage = (() => {
  const save = (todos) => localStorage.setItem("todos", JSON.stringify(todos));
  const load = () => {
    const todos = localStorage.getItem("todos");
    return JSON.parse(todos ?? "[]");
  };

  return { save, load };
})();
