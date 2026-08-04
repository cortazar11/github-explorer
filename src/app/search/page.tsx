import { searchUsers,searchRepositories } from "@/lib/github";
import { SearchForm } from "@/components/search/SearchForm";
import { UserGrid } from "@/components/user/UserGrid";
import { RepositoryGrid } from "@/components/repository/RepositoryGrid";

type Props = {
  searchParams: Promise<{
    type: "users" | "repositories";
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "", type = "users" } = await searchParams;

  if (!q) {
    return (
      <main className="container mx-auto px-4 py-8">
        <SearchForm />
        <p className="mt-8">No search query.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <SearchForm query={q} type={type} />
      <h2 className="mb-6 text-3xl font-bold">
        {type === "users"
            ? `Users matching "${q}"`
            : `Repositories matching "${q}"`}
        </h2>

      <section className="mt-10">
        {type === "users" ? (
          <UserGrid users={await searchUsers(q)} />
        ) : (
          <RepositoryGrid repos={await searchRepositories(q)} />
        )}
      </section>
    </main>
  );
}