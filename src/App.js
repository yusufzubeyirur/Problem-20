import { useEffect, useState } from "react";

// todos endpoint'inden tüm todo'ları getirin ve todo bileşeninde görüntüleyin
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos

const API_URL = "https://jsonplaceholder.typicode.com/users/1/todos";
export default function Todos() {
  const [todos, setTodos] = useState([]);
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  // }[]
  useEffect(() => {
    async function fetcTodos() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log("Hata...", error);
      }
    }
    fetcTodos();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center py-8">
      <h1 className="text-2xl font-bold pb-4">Yapılacaklar Listem</h1>
      <div className="space-y-5">
        {todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </div>
    </div>
  );
}

function Todo({ title, completed }) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id="completed"
          name="completed"
          type="checkbox"
          defaultChecked={completed}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <div className="font-medium text-gray-900">{title}</div>
      </div>
    </div>
  );
}
