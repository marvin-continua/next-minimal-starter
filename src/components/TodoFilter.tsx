"use client";

import type { FilterType } from "@/types/todo";

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  totalCount: number;
}

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

export function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  totalCount,
}: TodoFilterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => onFilterChange(f.value)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === f.value
                ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-zinc-100"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <span className="text-xs text-zinc-400 dark:text-zinc-500">
        {activeCount} of {totalCount} remaining
      </span>
    </div>
  );
}
