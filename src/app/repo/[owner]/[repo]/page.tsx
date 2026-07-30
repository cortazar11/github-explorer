type Props={
    params: Promise<{owner:string;repo:string}>
}

export default async function OwnerRepo( {params}:Props){
    const {owner,repo }=await params;

    console.log(owner)
    console.log(repo)

    return(
        <main className="container mx-auto px-4 py-8">
            <h1>Owner: {owner}</h1>
            <h1>Repo: {repo}</h1>
        </main>
        )
}