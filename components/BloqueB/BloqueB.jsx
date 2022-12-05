import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
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

export default function BloqueB({ url }) {
  const [slider, setSlider] = useState(null);
  const [notas, setNotas] = useState(null);
  const [category, setCategory] = useState(null);
  const router = useRouter();

  const redirect = (direccion) => {
    router.push({
      ...router,
      pathname: `/notes/byURL/${direccion}`,
    });
  };

  useEffect(() => {
    axios.get(`/api/notes/byCategory/${url}`).then((notes) => {
      setNotas(notes.data);
    });
    axios.get(`/api/categories/${url}`).then((category) => {
      setCategory(category.data);
    });
  }, [url]);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Container
      marginTop="40px"
      display="flex"
      flexDir="column"
      maxW="67%"
      border="1px"
      borderRadius="lg"
      borderColor=" #f0f0f0"
    >
      <Text
        fontSize="50px"
        _hover={{
          color: "purple",
        }}
      >
        {category ? (
          <Link href={`/${category.url}`}>{category.name}</Link>
        ) : null}
      </Text>
      <Box
        marginTop="40px"
        position={"relative"}
        height={"600px"}
        width={"100%"}
        overflow={"hidden"}
        borderRadius="lg"
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
          {notas
            ? notas.map((nota, i) => (
                <NoteCarrusel key={nota.id} nota={nota} redirect={redirect}/>
              ))
            : null}
        </Slider>
      </Box>
    </Container>
  );
}
