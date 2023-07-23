import Link from "next/link";

import { prisma } from "./server/db";
import Todo from "./components/todo";

async function fetchTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, done: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: { done },
  });
}

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <div className="p-6 gap-6 flex flex-col">
      <Link
        href={"/createNewTodo"}
        className="text-center text-white py-2 rounded bg-blue-800"
      >
        Create new To do
      </Link>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            done={todo.done}
            createdAt={todo.createdAt}
            updatedAt={todo.updatedAt}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}
