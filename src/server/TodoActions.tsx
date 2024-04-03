"use server"

import { revalidatePath } from "next/cache";
import {prisma} from "../utils/db"

export async function getTodos() {
  const todos = await prisma.todo.findMany();
  return todos;
}

export async function addTodo(data: FormData) {
  const title = data.get("title") as string;
  const checkboxCheck = data.get("checkboxCheck") === "on";
  
  if (!title) {
    throw new Error("Title cannot be empty");
  }

  await prisma.todo.create({
    data: {
      title: title,
      done: checkboxCheck
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  await prisma.todo.delete({
    where: {
      id
    },
  });

  revalidatePath("/");
}

export async function updateTodo(id: string) {
  const todo = await prisma.todo.findUnique({
    where: {
      id
    },
  });

  if (!todo) {
    throw new Error("Todo not found");
  }

  await prisma.todo.update({
    where: {
      id
    },
    data: {
      done: !todo.done
    },
  });

  revalidatePath("/");
}

export async function clearCompleted() {
  await prisma.todo.deleteMany({
    where: {
      done: true
    },
  })

  revalidatePath("/");
}