import { Outlet } from "react-router-dom"

export const UnauthRouters = () => {
  return (
    <div className="w-screen min-h-screen  text-black">
      <Outlet />
    </div>
  )
}
