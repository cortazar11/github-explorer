import type { GitHubUser } from "@/lib/github/types";
import { UserCard } from "./UserCard";

type UserGridProps = {
  users: GitHubUser[];
};

export function UserGrid({ users }: UserGridProps) {
  if (users.length === 0) {
    return (
      <p className="text-muted-foreground">
        No users found.
      </p>
    );
  }

    return (                        
        <section
            className="
                grid           
                gap-4
                grid-cols-1
                sm:grid-cols-3
                md:grid-cols-4          
                lg:grid-cols-5      
                xl:grid-cols-6
                2xl:grid-cols-7
            " 
        >
      {users.map((user) => (
        <UserCard           
            key={user.username}         
            user={user}         
        />
      ))}
    </section>
  );
}
