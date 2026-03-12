"use client";

import { TodoFilter } from "@/components/TodoFilter";
import { TodoInput } from "@/components/TodoInput";
import { TodoList } from "@/components/TodoList";
import { useTodos } from "@/hooks/useTodos";

export default function Home() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    activeCount,
    totalCount,
    hydrated,
  } = useTodos();

  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col gap-6 px-4 py-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Todos
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Keep track of things that need to get done.
        </p>
      </header>

      <TodoInput onAdd={addTodo} />

      {hydrated && totalCount > 0 && (
        <TodoFilter
          filter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          totalCount={totalCount}
        />
      )}

      {hydrated && (
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      )}
    </main>
  );
}
