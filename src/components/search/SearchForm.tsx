import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type SearchFormProps = {
  query?: string;
  type?: "users" | "repositories" ;
  sort?: "stars" | "forks" | "updated";
  order?: "asc" | "desc";

  // User filters
  repos?: string;
  location?: string;
  language?: string;
  followers?: string;

  // Repository filters
  inDescription?: boolean;
  repoFollowers?: string;
  forks?: string;
  stars?: string;
  pushedAfter?: string;
};

export function SearchForm({
  query = "",
  type = "users",
  sort = "stars",
  order = "desc",

  repos = "",
  location = "",
  language = "",
  followers = "",

  inDescription = false,
  repoFollowers = "",
  forks = "",
  stars = "",
  pushedAfter = "",
}: SearchFormProps) {
  return (
    <div>
      <form
        action={type === "contributions" ? "/contributions" : "/search"}
        className="mx-auto mt-8 w-full max-w-2xl"
      >
      <div className="flex gap-3">
        <Input
          name="q"
          defaultValue={query}
          placeholder="Search GitHub..."
          autoComplete="off"
          required
          className="h-12 flex-1 rounded-xl"
        />

        <Button
          type="submit"
          size="icon"
          className="h-12 w-12 rounded-xl"
        >
          <Search className="size-5" />
        </Button>
      </div>

      <div className="mt-4 flex items-center gap-6">
        <span className="text-sm text-muted-foreground">
          Search in:
        </span>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="users"
            defaultChecked={type === "users"}
            
          />
          Users
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="repositories"
            defaultChecked={type === "repositories"}
            
          />
          Repositories
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="contributions"
            defaultChecked={type === "contributions"}
          />
          Contributions
        </label>
      </div>
      {type === "users" && (
        <div className="mt-6 rounded-xl border p-4">
          <h3 className="mb-4 font-semibold">User filters</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="location"
                className="mb-1 block text-sm font-medium"
              >
                Location
              </label>

              <Input
                id="location"
                name="location"
                defaultValue={location}
                placeholder="e.g. Spain"
              />
            </div>

            <div>
              <label
                htmlFor="language"
                className="mb-1 block text-sm font-medium"
              >
                Repository language
              </label>

              <Input
                id="language"
                name="language"
                defaultValue={language}
                placeholder="e.g. JavaScript"
              />
            </div>

            <div>
              <label
                htmlFor="repos"
                className="mb-1 block text-sm font-medium"
              >
                Repositories
              </label>

              <Input
                id="repos"
                name="repos"
                defaultValue={repos}
                placeholder="e.g. >10"
              />
            </div>

            <div>
              <label
                htmlFor="followers"
                className="mb-1 block text-sm font-medium"
              >
                Followers
              </label>

              <Input
                id="followers"
                name="followers"
                defaultValue={followers}
                placeholder="e.g. >100"
              />
            </div>
          </div>
        </div>
      )}
      {type === "repositories" && (
        <div className="mt-6 rounded-xl border p-4">
          <h3 className="mb-4 font-semibold">
            Repository filters
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">

            <div>
              <label
                htmlFor="language"
                className="mb-1 block text-sm font-medium"
              >
                Language
              </label>

              <Input
                id="language"
                name="language"
                defaultValue={language}
                placeholder="e.g. TypeScript"
              />
            </div>

            <div>
              <label
                htmlFor="repoFollowers"
                className="mb-1 block text-sm font-medium"
              >
                Followers
              </label>

              <Input
                id="repoFollowers"
                name="repoFollowers"
                defaultValue={repoFollowers}
                placeholder="e.g. >=100"
              />
            </div>

            <div>
              <label
                htmlFor="forks"
                className="mb-1 block text-sm font-medium"
              >
                Forks
              </label>

              <Input
                id="forks"
                name="forks"
                defaultValue={forks}
                placeholder="e.g. >50"
              />
            </div>

            <div>
              <label
                htmlFor="stars"
                className="mb-1 block text-sm font-medium"
              >
                Stars
              </label>

              <Input
                id="stars"
                name="stars"
                defaultValue={stars}
                placeholder="e.g. >=1000"
              />
            </div>

            <div>
              <label
                htmlFor="pushedAfter"
                className="mb-1 block text-sm font-medium"
              >
                Pushed after
              </label>

              <Input
                id="pushedAfter"
                name="pushedAfter"
                type="date"
                defaultValue={pushedAfter}
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="inDescription"
                  value="true"
                  defaultChecked={inDescription}
                />

                Search in description
              </label>
            </div>

          </div>
        </div>
      )}
      {type==="repositories" &&(
        <>
            <div className="mt-4 flex items-center gap-6">
          <span className="text-sm text-muted-foreground">
            Sort repositories by:
          </span>
            
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sort" 
                value="stars"
                defaultChecked={sort === "stars"}
              />
              Most stars
            </label>
            <label className="flex items-center gap-2"> 
              <input
                type="radio"
                name="sort"
                value="forks"
                defaultChecked={sort === "forks"}
              />
              Most forks
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                value="updated"
                defaultChecked={sort === "updated"}
              />
              Recently updated
            </label>
          </div>
          <div className="mt-4 flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Order repositories by:
            </span>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="order"
                value="asc"
                defaultChecked={order === "asc"}
              />
              Ascending
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="order"
                value="desc"
                defaultChecked={order === "desc"}
              />
              Descending
            </label>  
            
          </div>
        </>

      )}
      
    </form>
    </div>
    
  );
}