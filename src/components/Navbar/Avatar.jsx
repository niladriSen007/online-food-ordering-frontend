import { pink } from "@mui/material/colors"
import PropTypes from "prop-types"
import { Avatar as AvatarIcon } from "@mui/material"
import { memo } from "react"
const Avatar = memo(function MemoizedAvatar({ userName }) {
  return (
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
      <AvatarIcon
        sx={{ bgcolor: "white", color: pink.A400 }}
        className="bg-white"
      >
        {userName?.at(0).toUpperCase()}
      </AvatarIcon>
    </span>
  )
})

Avatar.propTypes = {
  userName: PropTypes.string,
}

export default Avatar
