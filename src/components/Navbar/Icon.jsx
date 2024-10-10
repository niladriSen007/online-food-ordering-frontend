import { IconButton } from "@mui/material"
import PropTypes from "prop-types"
import { memo } from "react"
const Icon = memo(function MemoizedIcon({ onclick, icon }) {
  return <IconButton onClick={onclick}>{icon}</IconButton>
})

Icon.propTypes = {
  onclick: PropTypes.func,
  icon: PropTypes.node,
}

export default Icon
