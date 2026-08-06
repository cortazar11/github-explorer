import { searchUsers,searchRepositories } from "@/lib/github";
import { SearchForm } from "@/components/search/SearchForm";
import { UserGrid } from "@/components/user/UserGrid";
import { RepositoryGrid } from "@/components/repository/RepositoryGrid";
import { Pagination } from "@/components/search/Pagination";


type Props = {
  searchParams: Promise<{
    type?: "users" | "repositories";
    q?: string;
    sort?: "stars" | "forks" | "updated";
    order?: "asc" | "desc";
    page?: string;
  }>;
};

const PER_PAGE = 100;

export default async function SearchPage({ searchParams }: Props) {
  const { q = "", type = "users", sort = "stars", order = "desc",page="1" } = await searchParams;
  const currentPage = Number(page);

  if (!q) {
    return (
      <main className="container mx-auto px-4 py-8">
        <SearchForm />
        <p className="mt-8">No search query.</p>
      </main>
    );
  }

  if (type === "users") {
    const resultUsers = await searchUsers({
      query: q,
      page: currentPage,
      perPage: PER_PAGE,
    });

    return (
      <main className="container mx-auto px-4 py-8">
        <SearchForm query={q} type={type} />

        <h2 className="mb-6 text-3xl font-bold">
          Users matching &rdquo;{q}&ldquo;
        </h2>
        <p className="mb-6 text-muted-foreground">
          Total users: {resultUsers.total.toLocaleString()}
        </p>

        <UserGrid users={resultUsers.users} />

        <Pagination
          query={q}
          type={type}
          currentPage={currentPage}
          totalPages={Math.ceil(resultUsers.total / PER_PAGE)}
        />
      </main>
    );
  }
  const resultRepositories = await searchRepositories({
  query: q,
  sort,
  order,
  page: currentPage,
  perPage: PER_PAGE,
});

return (
  <main className="container mx-auto px-4 py-8">
    <SearchForm
      query={q}
      type={type}
      sort={sort}
      order={order}
    />

    <h2 className="mb-6 text-3xl font-bold">
      Repositories matching &rdquo;{q}&ldquo;
    </h2>
    <p className="mb-6 text-muted-foreground">
        Total repositories: {resultRepositories.total.toLocaleString()}
    </p>

    <RepositoryGrid repos={resultRepositories.repos} />

    <Pagination
      query={q}
      type={type}
      currentPage={currentPage}
      totalPages={Math.ceil(resultRepositories.total / PER_PAGE)}
      sort={sort}
      order={order}
    />
  </main>
);
  

 
  
}