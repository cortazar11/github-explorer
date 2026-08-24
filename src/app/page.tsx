import { SearchForm } from "@/components/search/SearchForm";
import { MarkGithubIcon } from "@primer/octicons-react";


export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      
      <MarkGithubIcon size={64} />
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
       GitHub Explorer
      </h1>

      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Search GitHub users, explore their profiles, and discover their repositories.
      </p>

      <div className="mt-12 w-full">
        <SearchForm />
      </div>
    </section>
  );
}