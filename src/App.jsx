import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import { Suspense } from "react"

const AuthLayout = () => {
  return (
    <div className="w-screen min-h-screen  text-black">
      <Navbar />
      <div className="">
        <Outlet />
      </div>

      {/*  <ToastContainer /> */}
    </div>
  )
}

const UnauthLayout = () => {
  return <div>UnauthLayout</div>
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: <UnauthLayout />,
      children: [
        {
          path: "/auth/login",
          element: <div>Login</div>,
        },
        {
          path: "/auth/register",
          element: <div>Register</div>,
        },
      ],
    },
  ])

  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
export default App
