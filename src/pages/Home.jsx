import { lazy, Suspense } from "react"
import { RoughNotation } from "react-rough-notation"
import MultipleItemsCarousel from "../components/carousel/MultiItemCarousel"
import { HomeSkeletonLoader } from "../components/loader/HomeSkeletonLoader"
import { restaurants } from "../utils/restaurants"
const RestaurantCard = lazy(() =>
  import("../components/Restaurant/RestaurantCard")
)
const Advertisement = lazy(() =>
  import("../components/Advertisement/Advertisement")
)
const Footer = lazy(() => import("../components/Footer/Footer"))

const Home = () => {
  return (
    <Suspense fallback={<HomeSkeletonLoader />}>
      <div className="bg-[#f32563] h-[88vh] py-16">
        <section className="z-50 banner relative flex flex-col justify-center items-center ">
          <div className="w-[50vw] z-50 text-center">
            <p
              className="text-2xl lg:text-6xl font-black z-50 py-5 text-white "
              style={{
                lineHeight: "1.17",
              }}
            >
              Order food & groceries. Discover best restaurants.
              <RoughNotation
                type="crossed-off"
                show={true}
                strokeWidth={12}
                color="white"
                className=" font-black lg:text-6xl "
              >
                {" "}
                Swiggy🐳
              </RoughNotation>{" "}
              <RoughNotation
                type="highlight"
                show={true}
                strokeWidth={3}
                color="white"
                className="text-[#f32563] font-black lg:text-6xl "
              >
                {" "}
                Growww😋
              </RoughNotation>{" "}
              it.
            </p>
            <p className="z-10 text-white text-xl lg:text-2xl font-semibold py-4">
              Taste the Convenience: Food, Fast and Delivered.
            </p>
          </div>

          <div className="cover absolute top-0 left-0 right-0"></div>
          <div className="fadout"></div>
        </section>

        <section className="p-10 lg:py-10 lg:px-20">
          <div className="">
            <p className="text-3xl font-bold text-gray-100 py-3 pb-10">
              Top Meals
            </p>
            <MultipleItemsCarousel />
          </div>
        </section>
        <section className="px-5 lg:px-20 py-16">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-500 py-3 ">
              Order From Our Handpicked Favorites
            </h1>
            <div className="flex flex-wrap items-center justify-around ">
              {restaurants?.map((item, i) => (
                <RestaurantCard data={item} index={i} key={i} />
              ))}
            </div>
          </div>
        </section>
        <Advertisement />
        <Footer />
      </div>
    </Suspense>
  )
}
export default Home
