
import { getRepository } from "@/lib/github/client";
import {RepositoryProfile} from "@/components/repository/RepositoryProfile";

type Props={
    params: Promise<{owner:string;repo:string}>
}

export default async function OwnerRepo( {params}:Props){
    const {owner,repo }=await params;
    const repository= await getRepository(owner,repo);

    console.log(owner)
    console.log(repo)

    return(
        <main className="container mx-auto px-4 py-8">
            <RepositoryProfile repository={repository} />
        </main>
        )
}