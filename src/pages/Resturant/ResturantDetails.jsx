import { FormControlLabel } from "@mui/material"
import { lazy } from "react"

const MenuItemCard = lazy(() =>import("../../components/MenuItemCard/MenuItemCard"))
const Backdrop = lazy(() => import("@mui/material/Backdrop"))
const CircularProgress = lazy(() => import("@mui/material/CircularProgress"))
const Divider = lazy(() => import("@mui/material/Divider"))
const FormControl = lazy(() => import("@mui/material/FormControl"))
const Grid2 = lazy(() => import("@mui/material/Grid2"))
const Radio = lazy(() => import("@mui/material/Radio"))
const RadioGroup = lazy(() => import("@mui/material/RadioGroup"))
const Typography = lazy(() => import("@mui/material/Typography"))
const LocationOnIcon = lazy(() => import("@mui/icons-material/LocationOn"))
const TodayIcon = lazy(() => import("@mui/icons-material/Today"))

const resturant = {
  resturant: {
    id: 1,
    name: "The Grand",
    description: "The Grand is a restaurant",
    openingHours: "9:00 AM - 10:00 PM",
    categories: [
      "Thali",
      "Starters",
      "Indian Main Course",
      "Rice and Biryani",
      "Breads",
      "Accompaniments",
      "Dessert",
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
      "https://cdn.pixabay.com/photo/2017/05/10/21/25/vacation-2302009_960_720.jpg",
      "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    address: {
      country: "India",
      streetAddress: "123, Main Street, Bangalore",
    },
  },
}

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian Only", value: "vegetarian" },
  { label: "Non-Vegetarian Only", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
]

const categories = [
  "Thali",
  "Starters",
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Accompaniments",
  "Dessert",
]
const foodType = null
const foodCategory = null
const menu = {
  loading: false,
  menuItems: [
    {
      id: 1,
      name: "Paneer Butter Masala",
      description: "Paneer cooked in a rich tomato gravy",
      price: 200,
      category: "Indian Main Course",
      type: "vegetarian",
      images: [
        "https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Basmati rice cooked with chicken and spices",
      price: 250,
      category: "Rice and Biryani",
      type: "non_vegetarian",
      images: [
        "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 3,
      name: "Gulab Jamun",
      description: "Deep fried dumplings made of milk powder",
      price: 50,
      category: "Dessert",
      type: "vegetarian",
      available: true,
      images: [
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
      ],
    },
  ],
}

const ResturantDetails = () => {
  return (
    <>
      <div className="px-5 lg:px-20 ">
        <section>
          <h3 className="text-gray-500 py-2 mt-10">
            Home/{resturant.resturant?.address.country}/
            {resturant.resturant?.name}/{resturant.resturant?.id}/Order Online
          </h3>
          <div>
            <Grid2 container spacing={2}>
              <Grid2 item xs={12}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src={resturant?.resturant?.images?.at(0)}
                  alt=""
                />
              </Grid2>
              <Grid2 item xs={12} lg={6}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src={resturant?.resturant?.images[1]}
                  alt=""
                />
              </Grid2>
              <Grid2 item xs={12} lg={6}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src={resturant?.resturant?.images[2]}
                  alt=""
                />
              </Grid2>
            </Grid2>
          </div>
          <div className="pt-3 pb-5">
            <h1 className="text-4xl font-semibold">
              {resturant.resturant?.name}
            </h1>
            <p className="text-gray-500 mt-1">
              {resturant.resturant?.description}
            </p>
            <div className="space-y-3 mt-3">
              <p className="text-gray-500 flex items-center gap-3">
                <LocationOnIcon />{" "}
                <span>{resturant.resturant?.address.streetAddress}</span>
              </p>
              <p className="flex items-center gap-3 text-gray-500">
                <TodayIcon />{" "}
                <span className=" text-orange-300">
                  {" "}
                  {resturant.resturant?.openingHours} (Today)
                </span>
              </p>
            </div>
          </div>
        </section>
        <Divider />

        <section className="pt-[2rem] lg:flex relative ">
          <div className="space-y-10 lg:w-[20%] filter">
            <div className="box space-y-5 lg:sticky top-28">
              <div className="">
                <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                  Food Type
                </Typography>
                <FormControl className="py-10 space-y-5" component="fieldset">
                  <RadioGroup
                    name="food_type"
                    value={foodType || "all"}
                    /* onChange={handleFilter} */
                  >
                    {foodTypes?.map((item) => (
                      <FormControlLabel
                        key={Math.random() + 1}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                        sx={{ color: "gray" }}
                      />
                    ))}
                  </RadioGroup>
                  <Divider />
                  <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                    Food Category
                  </Typography>
                  <RadioGroup
                    name="food_category"
                    value={foodCategory || "all"}
                    /*    onChange={handleFilter} */
                  >
                    <FormControlLabel
                      value={"all"}
                      control={<Radio />}
                      label={"All"}
                      sx={{ color: "gray" }}
                    />
                    {resturant?.categories?.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        value={item.name}
                        control={<Radio />}
                        label={item.name}
                        sx={{ color: "gray" }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="lg:w-[80%] space-y-5 lg:pl-10">
            {menu?.menuItems?.map((item, index) => (
              <MenuItemCard item={item} key={index} />
              // <p>ashok</p>
            ))}
          </div>
        </section>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={menu.loading || resturant.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
export default ResturantDetails
