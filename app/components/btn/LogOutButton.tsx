import { HandleLogOut } from '@/lib/function/HandleLogOut'

const LogOutButton = () => {
  return (
    <div>
      <button onClick={HandleLogOut} className="bg-black text-white">
        Log out
      </button>
    </div>
  )
}

export default LogOutButton
