import { GitHubRepo } from "../../lib/github";

type RepositoryProfileProps = {
    repository: GitHubRepo;
};

export function RepositoryProfile({ repository }: RepositoryProfileProps) {
    return (
        <div className="mx-auto max-w-3xl rounded-2xl border bg-white shadow-lg p-8 space-y-4">
            <div> 
                <h1 className="text-4xl font-bold">
                    {repository.owner}/{repository.name}
                </h1>
                {repository.description && <p className="mt-4 max-w-lg text-slate-600">{repository.description}</p>}        
            </div>
            {/* <div className="flex flex-wrap gap-4"> */}
            <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Stars:</span>
                    <span>{repository.stargazersCount}</span>
                </div>
                <div className="flex items-center gap-2">   
                    <span className="font-semibold">Forks:</span>   
                    <span>{repository.forksCount}</span>
                </div>
                <div className="flex items-center gap-2">   
                    <span className="font-semibold">Open Issues:</span> 
                    <span>{repository.openIssuesCount}</span>   
                </div>      
            </div>  
            {/* <div className="flex flex-wrap gap-4"> */}
            <div className="grid-cols-2">
                {repository.language && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Language:</span>
                        <span>{repository.language}</span>
                    </div>      
                )}      
                {repository.license && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">License:</span>
                        <span>{repository.license}</span>                               
                    </div>      
                )} 
                {repository. visibility && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Visibility:</span>
                        <span>{repository.visibility}</span>
                    </div>
                )} 
                {repository.defaultBranch && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Default Branch:</span>
                        <span>{repository.defaultBranch}</span>
                    </div>
                )} 
                </div>
                <div className="flex flex-wrap gap-4">
                {repository.homepage && (   
                    <div className="flex items-center gap-2">   
                        <span className="font-semibold">Homepage:</span>
                        <a href={repository.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            {repository.homepage}
                        </a>
                    </div>
                )}      
                </div>  
                <div className="mt-8 grid grid-cols-2 gap-8 border-t pt-6">
                    <div className="flex flex-wrap gap-4">
                        <span className="font-semibold">Created At:</span> 
                        <span>{new Date(repository.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <span className="font-semibold">Updated At:</span> 
                        <span>{new Date(repository.updatedAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6">
                    <a
                        href={repository.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="..."
                        >
                        Open on GitHub →
                    </a>
                </div>
                     
        </div>
               
    )
}