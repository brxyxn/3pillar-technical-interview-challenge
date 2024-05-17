"use client"

import Card from "@/components/card";
import useRandomUser from "@/hooks/use-random-user";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([])

  const {fetchUsers, users: fetchedUsers, loading} = useRandomUser()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers]);

  useEffect(() => {
    setUsers(fetchedUsers)
  }, [fetchedUsers])

  const handleRemove = (email: string) => {
    const newUsers = users.filter((user) => user.email !== email)
    setUsers(newUsers)
  }

  const handleReset = () => {
    setUsers(fetchedUsers)
  }

  return (
    <main className={"flex min-h-screen flex-col items-center gap-4 p-24"}>
      <h1 className={"text-6xl"}>{"Users"}</h1>
      <button onClick={handleReset}>{"Reset"}</button>
      <div id={"users"} className={"flex flex-wrap gap-4"}>
        {users.map((user) => (
            <Card key={user.email} user={user} loading={loading} onClick={() => {
              handleRemove(user.email)
            }}/>
          )
        )}
      </div>
    </main>
  );
}
