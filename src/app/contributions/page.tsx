
import { ContributionSearchForm } from  "@/components/contributions/ContributionsSearchForm";
import { Pagination } from "@/components/search/Pagination";
import { searchContributions, ContributionSearchFilters } from "@/lib/github";


type Props = {
  searchParams: Promise<{
    q?: string;
    page?: string;
    perPage?: string;
    state?: "open" | "closed";
    language?: string;
    label?: string;
    repo?: string;
  }>;
};

const PER_PAGE = 100;

export default async function ContributionsPage({searchParams}: Props) {
  const {q="", page="1", state="open", language="all", label="all",repo=""} = await searchParams;
  const currentPage = Number(page);

  const contributionFilters:ContributionSearchFilters={
        state: state,
        language: language==="all" ? undefined: language,
        label: label==="all" ? undefined: label,
        repo: repo || undefined
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
            <ContributionSearchForm 
                initialQuery={q}
                state={state}
                language={language} 
                label={label}
                repo={repo}
            />
            <p className="mt-8">Found {resultContributions.total} contributions for query &quot;{q}&quot;, whose state is &quot;{state}&quot;,the language is &quot;{language}&quot;, the label is &quot;{label}&quot;.</p>
            <ul className="mt-4 space-y-4">
                {resultContributions.issues.map((issue) => (
                    <li key={issue.id} className="border p-4 rounded">
                        <a href={issue.issueUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {issue.title}
                        </a>
                        <p className="text-sm text-gray-600">
                            Repository: <a href={issue.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View repository</a>
                        </p>
                        <p className="text-sm text-gray-600">
                            Created at: {new Date(issue.createdAt).toLocaleString()}
                        </p>
                    </li>
                ))}
            </ul>   

            <Pagination
                query={q}
                type="contributions"
                currentPage={currentPage}   
                totalPages={Math.ceil(resultContributions.total / PER_PAGE)}
            />
        </main>
    );  
}

    

        