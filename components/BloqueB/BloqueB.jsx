import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Img,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import NoteCarrusel from "./NoteCarrusel";

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BloqueB({ data }) {
  const [slider, setSlider] = useState(null);
  const { notesArr } = data;
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const router = useRouter();

  const redirect = (nota) => {
    router.push({
      ...router,
      pathname: `/${nota.subCategory.url}/${nota.subCategory.category.url}/${nota.url}`,
    });
  };

  return (
    <Container
      marginTop="40px"
      display="flex"
      ml="14%"
      flexDir="column"
      maxW="50%"
      border="1px"
      borderRadius="lg"
      borderColor=" #f0f0f0"
    >
      {data.category ? (
        <Link href={`/${data.category.url}`}>
          <Box
            display="flex"
            paddingTop="30px"
            paddingBottom="10px"
            ml="4%"
            alignItems="end"
          >
            <Img
              mr="10px"
              width="41"
              height="49"
              maxW="100%"
              color="rgb(237, 162, 47)"
              src={data.category.icon_image}
            />
            <Text
              fontSize="2xl"
              height="32px"
              fontWeight="400"
              textTransform="uppercase"
              color={data.category.color}
            >
              {data.category.name}
            </Text>
          </Box>
        </Link>
      ) : null}
      <Box
        marginTop="40px"
        position={"relative"}
        height={"600px"}
        width={"100%"}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {notesArr
            ? notesArr.map((nota, i) => (
                <NoteCarrusel key={nota.id} nota={nota} redirect={redirect} />
              ))
            : null}
        </Slider>
      </Box>
    </Container>
  );
}
