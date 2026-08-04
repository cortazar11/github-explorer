import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchFormProps = {
  query?: string;
  type?: "users" | "repositories";
};

export function SearchForm({
  query = "",
  type = "users",
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
            checked={type === "users"}
            readOnly
          />
          Users
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="repositories"
            checked={type === "repositories"}
            readOnly
          />
          Repositories
        </label>
      </div>
    </form>
    </div>
    
  );
}