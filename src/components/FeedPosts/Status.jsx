import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

export default function Status() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  const usernames = [
    "username1",
    "username2",
    "username3",
    "username4",
    "username5",
    "username6",
    "username7",
    "username8",
    "username9",
    "username10",
  ];
  return (
    <Box position={"sticky"} h={"100px"} w={"650px"}>
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
      <Slider {...settings}>
        {usernames.map((username, index) => (
          <Box justifyItems={"center"} key={index}>
            <Avatar src="" alt="user profile pic" />
            <Text>{username}</Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
