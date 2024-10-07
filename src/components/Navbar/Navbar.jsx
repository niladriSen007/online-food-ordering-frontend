/* eslint-disable no-unused-vars */
import PersonIcon from "@mui/icons-material/Person"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Avatar, Badge, IconButton, Menu, MenuItem } from "@mui/material"
import { pink } from "@mui/material/colors"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RoughNotation } from "react-rough-notation"

const Navbar = () => {
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
      ? navigate("/admin/restaurant")
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
          <IconButton onClick={() => navigate("/search")}>
            <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
          </IconButton>
        </div>
        <div className="flex items-center space-x-2">
          {auth.user?.userName ? (
            <span
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              /*  onClick={
                auth.user?.role === "ROLE_ADMIN"
                  ? handleOpenMenu
                  : navigateToProfile
              } */
              className=" font-semibold cursor-pointer"
            >
              <Avatar
                sx={{ bgcolor: "white", color: pink.A400 }}
                className="bg-white"
              >
                {auth?.user?.userName?.at(0).toUpperCase()}
              </Avatar>
            </span>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon sx={{ fontSize: "2rem", color: "white" }} />
            </IconButton>
          )}
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
}
export default Navbar
