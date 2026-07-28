import { getUser } from "@/lib/github";
import Image from 'next/image'

type Props={
    params: Promise <{login:string;}>
}

export default async function UserPage({params}: Props) {
     const {login}= await params;

     const user=await getUser(login)

     return (
        <main className="mx-auto max-w-5xl px-6 py-10">
            <div>
                <h1 className="text-4xl font-bold">
                    {user.name ?? user.login}
                </h1>

                <p className="text-slate-500">
                        @{user.login}
                </p>
            
                    <Image
                        src={user.avatarUrl}
                        alt={user.login}
                        width={200}
                        height={200}
                        className="mx-auto rounded-full border-4"
                    />
                <h1>{user.name ?? user.login}</h1>
                <p>@{user.login}</p>
                {user.bio && (
                    <p>{user.bio}</p>
                    )}
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
                        🌐 Website
                    </a>
                )}
                <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Repositories: {user.publicRepos}</p>
                </div>
            </div>
        </main>
     )
    
}