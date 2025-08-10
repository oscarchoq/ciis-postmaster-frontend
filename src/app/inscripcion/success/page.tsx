import { cookies } from "next/headers"
import { Success } from "./ui/Success"
import { redirect } from "next/navigation"

const page = async () => {
  
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('user')

  if (!userCookie) {
    redirect('/inscripcion')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Success name={userCookie.value} />
    </div>
  )
}

export default page