import { searchUsers } from "@/lib/github";
import { SearchForm } from "@/components/search/SearchForm";
import { UserGrid } from "@/components/user/UserGrid";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export  default async function SearchPage({searchParams}:Props){
    const {q=""} = await searchParams;
    
    if(!q){
        return <p>No search query.</p>
    }

    const users=await searchUsers(q)
    
    console.log(users)


    return(
        <main className="mx-auto max-w-7xl px-6 py-12">
        <SearchForm />

        <div className="mt-10">
            <h1 className="text-3xl font-bold">
            Results for &quot;{q}&quot;
            </h1>

            <p className="mt-2 text-muted-foreground">
            {users.length} users found
            </p>
        </div>

        <div className="mt-8">
            <UserGrid users={users} />
        </div>
    </main>
)

}   