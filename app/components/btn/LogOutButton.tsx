import { HandleLogOut } from '@/lib/function/HandleLogOut'

const LogOutButton = () => {
  return (
    <div>
      <button onClick={HandleLogOut} className="bg-black text-white p-2 w-full absolute bottom-0">
        Log out
      </button>
    </div>
  )
}

export default LogOutButton
