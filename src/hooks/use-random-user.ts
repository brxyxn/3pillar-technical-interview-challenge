import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export default function useRandomUser() {
  // https://randomuser.me/api/
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  const fetchUsers: () => void = useCallback(() => {
    setLoading(true)

    axios.get("https://randomuser.me/api/?page=1&results=10").then((response: AxiosResponse) => {
      const {data, status} = response
      if (status === 200) {
        setUsers(data.results)
        toast.success("Users fetched successfully")
        return
      }

      toast.error("Failed to fetch users")
    }).catch(
      (error) => {
        console.error(error)

        toast.error("Failed to fetch users")
      }
    ).finally(
      () => {
        setLoading(false)
      }
    )
  }, [])

  return {
    fetchUsers,
    users,
    loading
  }
}