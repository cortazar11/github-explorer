import Link from "next/link";
import { getPaginationItems } from "../../lib/pagination";

type PageNumbersProps = {
  query: string;
  type: "users" | "repositories" | "contributions";
  currentPage: number;
  totalPages: number;
  sort?: "stars" | "forks" | "updated";
  order?: "asc" | "desc";
};

export function PageNumbers({
  query,
  type,
  currentPage,
  totalPages,
  sort,
  order,
}: PageNumbersProps) {
  const items = getPaginationItems(currentPage, totalPages);

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
    <div className="flex items-center gap-2">
      {items.map((item, index) => {
        if (item === "...") {
          return (
             <span key={`ellipsis-${index}`} className="px-2">
              ...
            </span>
          );
        }

        return (
          <Link
            key={item}
            href={createUrl(item)}
            className={
              item === currentPage
                ? "rounded-md bg-primary px-3 py-2 text-white"
                : "rounded-md border px-3 py-2 hover:bg-slate-100"
            }
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}