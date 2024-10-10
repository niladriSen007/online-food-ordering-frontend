import { lazy } from "react"
import { Outlet } from "react-router-dom"
const Navbar = lazy(() => import("../components/Navbar/Navbar"))

export const AuthRouters = () => {
  return (
    <div className="w-screen min-h-screen  text-black">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
