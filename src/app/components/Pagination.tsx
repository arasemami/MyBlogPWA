import React from "react";

export default function Pagination({
  page,
  total,
  pageSize,
  onPage,
}: {
  page: number;
  total: number;
  pageSize: number;
  onPage: (p: number) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center gap-2 mt-4">
      <button
        className="px-3 py-1 rounded border"
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Prev
      </button>

      <div className="flex gap-2">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPage(p)}
            className={`px-3 py-1 rounded border ${
              p === page ? "bg-sky-600 text-white" : ""
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className="px-3 py-1 rounded border"
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </nav>
  );
}
