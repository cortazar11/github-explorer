import { GitHubUserDetails } from "@/lib/github";
import Image from "next/image";

type ProfileCardProps={
    user: GitHubUserDetails
}

export function ProfileCard({user}: ProfileCardProps){
    return (
        <div className="mx-auto max-w-2xl rounded-2xl border bg-white shadow-lg p-8">
            <div>
                <Image 
                    src={user.avatarUrl}
                    alt={user.login}
                    className="mx-auto rounded-full border-4 border-white shadow-lg"
                    width={220}
                    height={220}
                />
                <h1 className="mt-6 text-4xl font-bold">
                    {user.name ?? user.login}
                </h1>

                <p className="text-lg text-slate-500">
                    @{user.login}
                </p>
                {user.bio && <p className="mt-4 max-w-lg text-slate-600">{user.bio}</p>}
                
            </div>
            <div>
                <div className="mt-8 grid grid-cols-3 gap-6 border-y py-6 text-center">
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Repositories: {user.publicRepos}</p>
                </div>
                {user.location && (
                        <p>📍 {user.location}</p>
                )}
                {user.company && (
                    <p>🏢 {user.company}</p>
                )}
                {user.blog && (
                    <a
                        href={user.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        🌐 https://github.blog
                    </a>
                )}
                
            </div>
        </div> 
    )
    
}