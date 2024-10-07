/* eslint-disable no-unused-vars */
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useNavigate } from "react-router-dom"
import { Card, Chip, IconButton } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import PropTypes from "prop-types"
import { memo } from "react"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

const RestaurantCard = memo(function RestaurantCard({ data, index }) {
  const navigate = useNavigate()

  return (
    <div className="m-5 w-[18rem]  shadow-2xl rounded-b-xl pb-6">
      <div
        /*    onClick={navigateToRestaurant} */
        className={`${
          data?.open ? "cursor-pointer" : "cursor-not-allowed"
        }  relative `}
      >
        <img
          className="w-full h-[10rem] rounded-t-xl object-cover "
          src={data?.imageUrl}
          alt=""
        />
        <Chip
          size="small"
          // variant="outlined"
          className="absolute top-2 left-2"
          color={data?.open ? "success" : "error"}
          label={data?.open ? "Open" : "Closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-bold text-lg">{data?.name}</p>
          {/* <div>
        <span>{data?..rating}</span>
      </div> */}
          <p className="text-gray-500 text-sm font-semibold">
            {data?.description.length > 40
              ? data?.description.substring(0, 40) + "..."
              : data?.description}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm">
              Rating: {data?.rating || "4.6"}
            </p>
            <p className="text-gray-500 text-sm">
              Delivery Time: {"30 - 45 mins"}
            </p>
          </div>
        </div>

        <div>
          <IconButton
          /* onClick={handleAddToFavorites} */
          >
            {/* {isPresentInFavorites(auth.favorites, data) ? ( */}
            {10 % 2 == 0 ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
      <div className=" bg-green-600 text-white py-2 rounded-md px-1 mx-4 text-xs font-bold flex items-center justify-between">
        <p className="text-[12px]">
          <LocalOfferIcon sx={{ fontSize: "16px" }} /> Flat 25% off on
          pre-booking
        </p>
        <p className="text-[12px]">+2 more</p>
      </div>
    </div>
  )
})

RestaurantCard.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
}

export default RestaurantCard
