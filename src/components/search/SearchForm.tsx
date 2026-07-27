import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchForm() {
  return (
    <form
      action="/search"
      className="mx-auto mt-8 flex w-full max-w-2xl gap-3"
    >
      <Input
        name="q"
        placeholder="Search GitHub users..."
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
    </form>
  );
}