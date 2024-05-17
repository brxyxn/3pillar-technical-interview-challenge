import { Image, Skeleton, Stack } from '@chakra-ui/react'

interface UserInfo {
  name: string
  country: string
  email: string
  image: string
}

interface ICardProps {
  user: User
  loading: boolean
  onClick: () => void
}

export default function Card({user, loading, onClick}: ICardProps) {
  const {name, picture: {thumbnail}, location: {country}, email} = user

  return (
    <div id={"card"} className={"flex flex-col border p-4 rounded-xl shadow-xl bg-white w-[400px]"}>
      {loading ? <Loading/> :
        (<div id="header" className={"flex gap-4"}>
            <Image
              borderRadius='full'
              boxSize='48px'
              src={thumbnail}
              alt='Dan Abramov'
            />
            <div className={"flex flex-col gap-1"}>
              <h2 className={"font-bold"}>{`${name.first} ${name.last}`}</h2>
              <span>{country}</span>
              <span>{email}</span>
            </div>
          </div>
        )}
      <div id={"footer"} className={"flex justify-end py-4"}>
        <button
          onClick={onClick}
          className={"px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 hover:outline hover:outline-black"}>{"Remove"}</button>
      </div>
    </div>
  )
}

const Loading = () => {
  return <Stack>
    <Skeleton height='20px'/>
    <Skeleton height='20px'/>
    <Skeleton height='20px'/>
  </Stack>
}