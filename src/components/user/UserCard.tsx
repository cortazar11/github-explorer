import type { GitHubUser} from "@/lib/github/types";
import Image from "next/image";
import Link from  "next/link";

type UserCardProps = {
  user: GitHubUser;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/user/${user.username}`}>
        {/* href={user.profileUrl} target="_blank" rel="noopener noreferrer" className="mx-auto block w-full"> */}
      <article
        className=" 
        flex h-full flex-col
        overflow-hidden
        rounded-xl          
        border
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg 
        "   
    >   
    <Image
        src={user.avatarUrl}
        alt={user.username}
        className="aspect-square w-full object-cover"
        width={200}
        height={200}
    />  

        <div className="flex flex-1 flex-col p-3">              

            <h2 className="text-center text-base font-semibold">                
                {user.username}
            </h2>           

        </div>
      </article>
    </Link>
  );
}
