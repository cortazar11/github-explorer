import { searchUsers,searchRepositories, UserSearchFilters, RepositorySearchFilters } from "@/lib/github";
import { SearchForm } from "@/components/search/SearchForm";
import { UserGrid } from "@/components/user/UserGrid";
import { RepositoryGrid } from "@/components/repository/RepositoryGrid";
import { Pagination } from "@/components/search/Pagination";
import Link from "next/link";


type Props = {
  searchParams: Promise<{
    type?: "users" | "repositories";
    q?: string;
    sort?: "stars" | "forks" | "updated";
    order?: "asc" | "desc";
    page?: string;

    // User filters
    repos?: string;
    location?: string;
    language?: string;
    followers?: string;

    // Repository filters
    inDescription?: string;
    repoFollowers?: string;
    forks?: string;
    stars?: string; 
    pushedAfter?: string; 
   
  }>;
};

const PER_PAGE = 100;

export default async function SearchPage({ searchParams }: Props) {
  const { 
    q = "", 
    type = "users", 
    sort = "stars", 
    order = "desc",
    page="1",
    repos = "",
    location = "",
    language = "",
    followers = "",
    inDescription = "",
    repoFollowers = "",
    forks = "",
    stars = "",
    pushedAfter = "" } = await searchParams;

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

    const userFilters: UserSearchFilters = {
      repos: repos || undefined,
      location: location || undefined,
      language: language || undefined,
      followers: followers || undefined,
    };

    const resultUsers = await searchUsers({
      query: q,
      filters: userFilters,
      page: currentPage,
      perPage: PER_PAGE,
    });

    const activeFilters: string[] = [];

    if (location) {
      activeFilters.push(`Location: ${location}`);
    }

    if (language) {
      activeFilters.push(`Language: ${language}`);
    }

    if (followers) {
      activeFilters.push(`Followers: > ${followers}`);
    }

    if (repos) {
      activeFilters.push(`Repositories: ${repos}`);
    }

    return (
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            ← Back to Home
        </Link>
      </div>
        <SearchForm query={q} type={type} />

        <h2 className="mb-6 text-3xl font-bold">
          Users matching &rdquo;{q}&ldquo;
          {activeFilters.length > 0 && (
            <span className="ml-3 text-2xl text-gray-600">
              ({activeFilters.join(", ")})
            </span>
          )}
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

    if (type === "repositories") {
      const repositoryFilters: RepositorySearchFilters = {
        inDescription: inDescription === "true" ? true : false,
        repoFollowers: repoFollowers || undefined,
        forks: forks || undefined,
        stars: stars || undefined,
        pushedAfter: pushedAfter || undefined,
      };
      const resultRepositories = await searchRepositories({
      query: q,
      filters: repositoryFilters,
      sort,
      order,
      page: currentPage,
      perPage: PER_PAGE,
    });

    const activeFilters: string[] = [];

    if (inDescription === "true") {
      activeFilters.push(`In Description: ${inDescription}`);
    }

    if (language) {
      activeFilters.push(`Language: ${language}`);
    }

    if (repoFollowers) {
      activeFilters.push(`Repository Followers: > ${repoFollowers}`);
    }

    if (forks) {
      activeFilters.push(`Forks: > ${forks}`);
    }
    if (stars) {
      activeFilters.push(`Stars: > ${stars}`);
    }
    if (pushedAfter) {
      activeFilters.push(`Pushed After: ${pushedAfter}`);
    }

    return (
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          ← Back to Home
      </Link>
      </div>
        <SearchForm
          query={q}
          type={type}
          sort={sort}
          order={order}
        />

        <h2 className="mb-6 text-3xl font-bold">
          Repositories matching &rdquo;{q}&ldquo;
           {activeFilters.length > 0 && (
            <span className="ml-3 text-2xl text-gray-600">
              ({activeFilters.join(", ")})
            </span>
          )}
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
  
}