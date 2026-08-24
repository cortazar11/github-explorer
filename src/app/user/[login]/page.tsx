import { getUser } from "@/lib/github";
import  {ProfileCard}  from "@/components/user/ProfileCard";
import {RepositoryGrid} from "@/components/repository/RepositoryGrid";
import { getUserRepos } from "@/lib/github";
import Link from "next/link";

type Props={
    params: Promise <{login:string;}>
}

export default async function UserPage({params}: Props) {
     const {login}= await params;

     const user=await getUser(login)
     const repos= await getUserRepos(login);

     return (
        <main className="container mx-auto px-4 py-8">
            <div className="mx-auto w-full max-w-2xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    ← Back to Home
                </Link>
            </div>
            <section>
                <ProfileCard user={user}/>
            </section>
            
            <section className="mt-12">
                <h2 className="mb-6 text-3xl font-bold">
                    Repositories  ({repos.length})
                </h2>

                <RepositoryGrid repos={repos} />
            </section>
        </main>
     )
    
}