import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthRouters } from "./AuthRouters"
import { lazy, Suspense } from "react"
const ResturantDetails = lazy(() =>
  import("../pages/Resturant/ResturantDetails")
)
const UnauthRouters = lazy(() => import("./UnauthRouters"))
const Home = lazy(() => import("../pages/Home"))

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthRouters />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/resturant/:city/:title/:id",
          element: <ResturantDetails />,
        },
      ],
    },
    {
      path: "/auth",
      element: <UnauthRouters />,
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
