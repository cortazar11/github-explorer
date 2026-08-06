import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchFormProps = {
  query?: string;
  type?: "users" | "repositories";
  sort?: "stars" | "forks" | "updated";
  order?: "asc" | "desc";
};

export function SearchForm({
  query = "",
  type = "users",
  sort = "stars",
  order = "desc"
}: SearchFormProps) {
  return (
    <div>
      <form
        action="/search"
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
      </div>
      <div className="mt-4 flex items-center gap-6">
          <span className="text-sm text-muted-foreground">
            SortRepositories by:
          </span>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sort"
                value="stars"
                defaultChecked={sort === "stars"} 
              />
              Best match
            </label>
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
              OrderRepositories by:
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
    </form>
    </div>
    
  );
}