import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);

  // These are the images used in the slide
  const cards = [
    "/screenshot4.png",
    "/screenshot1.png",
    "/screenshot2.png",
    "/screenshot3.png",
  ];

  return (
    <Box
      position={"sticky"}
      height={"full"}
      width={"250px"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"xl"}
            position="relative"
            backgroundPosition="revert-layer"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
