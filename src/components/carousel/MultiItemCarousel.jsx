import { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import CarouselItem from "./CarouselItem"
import { topMeals } from "../../utils/topMeals"
const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
    },
  },
]
export default class MultipleItemsCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      responsive,
    }
    return (
      <div>
        <Slider {...settings}>
          {topMeals?.map((item, index) => (
            <CarouselItem key={index} image={item?.image} title={item?.title} />
          ))}
        </Slider>
      </div>
    )
  }
}
