import Link from "next/link";
import { PageNumbers } from "./PageNumbers";

type PaginationProps = {
  query: string;
  type: "users" | "repositories" | "contributions";
  currentPage: number;
  totalPages: number;
  sort?: "stars" | "forks" | "updated";
  order?: "asc" | "desc";
};

export function Pagination({
  query,
  type,
  currentPage,
  totalPages,
  sort,
  order,
}: PaginationProps) {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  function createUrl(page: number) {
    const params = new URLSearchParams();

    params.set("q", query);
    params.set("type", type);
    params.set("page", String(page));

    if (type === "repositories") {
      if (sort) params.set("sort", sort);
      if (order) params.set("order", order);
    }

    return `/search?${params.toString()}`;
  }

  return (
    <div className="mt-8 grid grid-cols-3 items-center">
      <div>
        {hasPrevious && (
          <Link
            href={createUrl(currentPage - 1)}
            className="rounded-md bg-primary px-4 py-2 text-white"
          >
            Previous
          </Link>
        )}
      </div>

      <div className="flex justify-center">
        <PageNumbers
          query={query}
          type={type}
          currentPage={currentPage}
          totalPages={totalPages}
          sort={sort}
          order={order}
        />
      </div>

      <div className="flex justify-end">
        {hasNext && (
          <Link
            href={createUrl(currentPage + 1)}
            className="rounded-md bg-primary px-4 py-2 text-white"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}