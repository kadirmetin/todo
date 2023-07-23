import { prisma } from "@/app/server/db";
import { redirect } from "next/navigation";

async function createTask(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Title is required");
  }

  await prisma.todo.create({
    data: { title },
  });

  redirect("/");
}

export default function createNewTask() {
  return (
    <form action={createTask} className="p-6 flex flex-col gap-4">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="bg-gray-300 py-2 px-2 rounded"
      />
      <button type="submit" className="bg-blue-700 text-white py-2 rounded">
        Create
      </button>
    </form>
  );
}
