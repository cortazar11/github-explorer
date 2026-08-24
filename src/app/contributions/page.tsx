
import { ContributionSearchForm } from  "@/components/contributions/ContributionsSearchForm";
import { Pagination } from "@/components/search/Pagination";
import { searchContributions, ContributionSearchFilters } from "@/lib/github";
import { ContributionGrid } from "@/components/contributions/ContributionsGrid";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    q?: string;
    page?: string;
    perPage?: string;
    state?: "open" | "closed";
    language?: string;
    label?: string;
    repo?: string;
    created?: string;
    updated?: string;
  }>;
};

const PER_PAGE = 100;

export default async function ContributionsPage({searchParams}: Props) {
  const {
    q="", 
    page="1", 
    state="open", 
    language="all", 
    label="all",
    repo="",
    created="all",
    updated="all",
        } = await searchParams;
  const currentPage = Number(page);

  const contributionFilters:ContributionSearchFilters={
        state: state,
        language: language==="all" ? undefined: language,
        label: label==="all" ? undefined: label,
        repo: repo || undefined,
        created: created==="all" ? undefined: Number(created),
        updated: updated==="all" ? undefined: Number(updated),
  }


    if (!q) {           
        return (        
            <main className="container mx-auto px-4 py-8">  

                <ContributionSearchForm initialQuery="q" />
                <p className="mt-8">No search query.</p>
            </main>
    );
    } 

    const resultContributions = await searchContributions({
        query: q,
        filters: contributionFilters,
        page: currentPage,
        perPage: PER_PAGE
    });
    
    return (
        <main className="container mx-auto px-4 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                    ← Back to Home
                </Link>
            
            <h1 className="mb-6 text-3xl font-bold">
                Contribution opportunities
            </h1>
            <ContributionSearchForm 
                initialQuery={q}
                state={state}
                language={language} 
                label={label}
                repo={repo}
                created={created}
                updated={updated}
            />
            <p className="mt-8">Found {resultContributions.total.toLocaleString()} issues matching &quot;{q}&quot;, whose state is &quot;{state}&quot;,the language is &quot;{language}&quot;, the label is &quot;{label}&quot;.</p>
           
            <ContributionGrid issues={resultContributions.issues} />
            <Pagination
                query={q}
                type="contributions"
                currentPage={currentPage}   
                totalPages={Math.ceil(resultContributions.total / PER_PAGE)}
            />
        </main>
    );  
}

    

        