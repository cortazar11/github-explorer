
import { getRepository } from "@/lib/github/client";
import {RepositoryProfile} from "@/components/repository/RepositoryProfile";
import Link from "next/link";

type Props={
    params: Promise<{owner:string;repo:string}>
}

export default async function OwnerRepo( {params}:Props){
    const {owner,repo }=await params;
    const repository= await getRepository(owner,repo);

  

    return(
        <main className="container mx-auto px-4 py-8">
            <div className="mx-auto w-full max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            ← Back to Home
            </Link>
      </div>
            <RepositoryProfile repository={repository} />
        </main>
        )
}