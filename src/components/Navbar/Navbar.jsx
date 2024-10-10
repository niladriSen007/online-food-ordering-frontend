/* eslint-disable no-unused-vars */
import { lazy, memo, useState } from "react"
const PersonIcon = lazy(() => import("@mui/icons-material/Person"))
const SearchIcon = lazy(() => import("@mui/icons-material/Search"))
const ShoppingCartIcon = lazy(() => import("@mui/icons-material/ShoppingCart"))
const Badge = lazy(() => import("@mui/material/Badge"))
const IconButton = lazy(() => import("@mui/material/IconButton"))
const Icon = lazy(() => import("./Icon"))
const Avatar = lazy(() => import("./Avatar"))
const ShowOrHide = lazy(() => import("../common/ShowOrHide"))
import { RoughNotation } from "react-rough-notation"
import { useNavigate } from "react-router-dom"

const Navbar = memo(function MemoizedNavbar() {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState()
  const auth = {
    user: {
      userName: "Niladri",
      role: "ROLE_ADMIN",
    },
  }

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const navigateToProfile = (e) => {
    auth.user?.role === "ROLE_ADMIN" ||
    auth.user?.role === "ROLE_RESTAURANT_OWNER"
      ? navigate("/admin/resturant")
      : navigate("/my-profile")
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    /*  dispatch(logout()) */
    handleCloseMenu()
  }

  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#f32563]  lg:px-20 flex justify-between overflow-x-hidden">
      <div className="flex items-center space-x-4">
        <div
          onClick={() => navigate("/")}
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
        >
          <RoughNotation
            type="box"
            show={true}
            strokeWidth={2}
            color="white"
            className="logo font-black text-gray-200 text-3xl  "
          >
            Growww😋
          </RoughNotation>
        </div>
        {/* <li className="font font-semibold">Home</li> */}
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <Icon
            onclick={() => navigate("/search")}
            icon={<SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />}
          />
        </div>
        <div className="flex items-center space-x-2">
          <ShowOrHide
            when={auth?.user?.userName}
            child={<Avatar userName={auth?.user?.userName} />}
            fallback={
              <Icon
                onclick={() => navigate("/account/login")}
                icon={<PersonIcon sx={{ fontSize: "2rem", color: "white" }} />}
              />
            }
          />
          {/*  <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() =>
                auth.user?.role === "ROLE_ADMIN"
                  ? navigate("/admin")
                  : navigate("/super-admin")
              }
            >
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu> */}
        </div>

        <IconButton
        /* onClick={navigateToCart} */
        >
          <Badge
            color="black"
            /* badgeContent={cart.cartItems.length} */
            badgeContent={0}
          >
            <ShoppingCartIcon
              className="text-4xl"
              sx={{ fontSize: "2rem", color: "white" }}
            />
          </Badge>
        </IconButton>
      </div>

      {/*  <Auth handleClose={handleCloseAuthModel} /> */}
    </div>
  )
})
export default Navbar
