import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import axios from "axios";

const Widget = () => {
  const constraintsRef = useRef(null);

  const y1 = useMotionValue(0);
  const scale1 = useTransform(y1, [-100, 0, 240, 480], [0.5, 1, 1.8, 1]);

  const x2 = useMotionValue(0);
  const scale2 = useTransform(x2, [0, -230, -460], [1, 1.8, 1]);

  const xEx = useMotionValue(0);
  const scaleEx = useTransform(xEx, [0, -230], [1, 1.8]);
  const opacityEx = useTransform(xEx, [0, 10, -220, -230], [0, 1, 1, 0]);
  const scaleExMob = useTransform(xEx, [0, -167], [1, 1.7]);
  const opacityExMob = useTransform(xEx, [0, 10, -157, -167], [0, 1, 1, 0]);

  const y3 = useMotionValue(0);
  const scale3 = useTransform(y3, [0, -190, -380], [1, 1.8, 1]);

  const y4 = useMotionValue(0);
  const scale4 = useTransform(y4, [0, -190, -380], [1, 1.8, 1]);

  const x5 = useMotionValue(0);
  const scale5 = useTransform(x5, [0, 230, 460], [1, 1.8, 1]);

  const [warning, setWarning] = useState(true);

  useEffect(() => setWarning(false), warning);

  const [isDragging, setIsDragging] = useState(false);

  const eventControl = (event, info) => {
    if (event.type === "pointermove" || event.type === "touchmove") {
      setIsDragging(true);
    }
  };

  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    axios
      .get("/api/groupsubjects/findInUse")
      .then((res) => res.data.subjects)
      .then((subj) => setSubjects(subj));
  }, []);

  const openSubject1 = (e) => {
    e.preventDefault();
    window.open(`http://localhost:3000/${subjects[0].urlNote}`);
  };

  const openSubject2 = (e) => {
    e.preventDefault();
    window.open(`http://localhost:3000/${subjects[1].urlNote}`);
  };

  const openSubject3 = (e) => {
    e.preventDefault();
    window.open(`http://localhost:3000/${subjects[2].urlNote}`);
  };

  const openSubject4 = (e) => {
    e.preventDefault();
    window.open(`http://localhost:3000/${subjects[3].urlNote}`);
  };

  const openSubject5 = (e) => {
    e.preventDefault();
    window.open(`http://localhost:3000/${subjects[4].urlNote}`);
  };

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
  }

  const isMd = useMediaQuery("(min-width: 990px)");

  return (
    <Box
      h={{ sm: "155vw", md: "55vw" }}
      w="100vp"
      p="25px 0px 25px"
      bg="#FDEBEB"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Grid
        m={{ sm: "0", md: "25px" }}
        templateRows={{ sm: "repeat(5, 1fr)", md: "repeat(8, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        height="100%"
        width="100%"
        flexDirection={{ sm: "column", md: "row" }}>
        <GridItem
          p={{ sm: "0% 5%", md: "10%" }}
          rowStart={{ sm: 1, md: 1 }}
          rowEnd={{ sm: 2, md: 5 }}
          colStart={{ sm: 1, md: 1 }}
          colEnd={{ sm: 1, md: 1 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column">
          <Heading
            size="lg"
            color="#B9459E"
            textAlign={{ sm: "center", md: "left" }}>
            ¿Cómo te sentís en este momento?
          </Heading>
          <Text
            size="md"
            color="#757575"
            p="10px 0px"
            textAlign={{ sm: "center", md: "left" }}>
            Te recomendamos una nota adecuada para tu mood de hoy.
          </Text>
        </GridItem>
        <GridItem
          rowStart={{ sm: 2, md: 1 }}
          rowEnd={{ sm: 5, md: 9 }}
          colStart={{ sm: 1, md: 2 }}
          colEnd={{ sm: 1, md: 4 }}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box
            h={{ sm: "80vw", md: "42vw" }}
            w={{ sm: "80%", md: "42vw" }}
            borderWidth={{ sm: "5vw", md: "3vw" }}
            borderColor="#FDC6C6"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            ref={constraintsRef}>
            <Box
              as={motion.div}
              style={{ y: "-240%" }}
              viewport={{ once: true }}
              position="absolute"
              h={{ sm: "15vw", md: "8vw" }}
              w={{ sm: "15%", md: "8%" }}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Box
                as={motion.div}
                style={{ y: y1, scale: scale1 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.2, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100%"
                w="100%"
                bg="#FDC6C6"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="5"
                drag
                dragMomentum={false}
                dragConstraints={constraintsRef}
                dragSnapToOrigin
                onClick={isDragging ? null : setWarning}
                onDrag={eventControl}
                onStop={eventControl}
                onDragEnd={openSubject1}>
                <Text
                  as={motion.p}
                  fontSize={{ sm: "5xl", md: "6xl" }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer">
                  {subjects ? subjects[0].name : null}
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: "230%", y: "-80%" }}
              viewport={{ once: true }}
              position="absolute"
              h={{ sm: "15vw", md: "8vw" }}
              w={{ sm: "15%", md: "8%" }}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Box
                as={motion.div}
                style={{ x: x2, scale: scale2 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.4, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100%"
                w="100%"
                bg="#FDC6C6"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="4"
                drag
                dragMomentum={false}
                dragConstraints={constraintsRef}
                dragSnapToOrigin
                onClick={isDragging ? null : setWarning}
                onDrag={eventControl}
                onStop={eventControl}
                onDragEnd={openSubject2}>
                <Text
                  as={motion.p}
                  fontSize={{ sm: "5xl", md: "6xl" }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer">
                  {subjects ? subjects[1].name : null}
                </Text>
              </Box>
              <Box
                as={motion.div}
                whileInView={
                  isMd
                    ? {
                        x: -230,
                        y: 80,
                        transition: { delay: 2.5, duration: 2 },
                      }
                    : {
                        x: -167,
                        y: 60,
                        transition: { delay: 1.5, duration: 1.5 },
                      }
                }
                viewport={{ once: true }}
                style={
                  isMd
                    ? { x: xEx, scale: scaleEx, opacity: opacityEx }
                    : { x: xEx, scale: scaleExMob, opacity: opacityExMob }
                }
                position="absolute"
                h="100%"
                w="100%"
                bg="#FDC6C6"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="6">
                <Text fontSize={{ sm: "5xl", md: "6xl" }}>
                  {subjects ? subjects[1].name : null}
                </Text>
                <Text
                  marginTop="70px"
                  marginLeft="50px"
                  position="absolute"
                  fontSize={{ sm: "5xl", md: "6xl" }}
                  zIndex="7">
                  👆🏻
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: "155%", y: "190%" }}
              viewport={{ once: true }}
              position="absolute"
              h={{ sm: "15vw", md: "8vw" }}
              w={{ sm: "15%", md: "8%" }}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Box
                as={motion.div}
                style={{ y: y3, scale: scale3 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.6, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100%"
                w="100%"
                bg="#FDC6C6"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="3"
                drag
                dragMomentum={false}
                dragConstraints={constraintsRef}
                dragSnapToOrigin
                onClick={isDragging ? null : setWarning}
                onDrag={eventControl}
                onStop={eventControl}
                onDragEnd={openSubject3}>
                <Text
                  as={motion.p}
                  fontSize={{ sm: "5xl", md: "6xl" }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer">
                  {subjects ? subjects[2].name : null}
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: "-155%", y: "190%" }}
              viewport={{ once: true }}
              position="absolute"
              h={{ sm: "15vw", md: "8vw" }}
              w={{ sm: "15%", md: "8%" }}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Box
                as={motion.div}
                style={{ y: y4, scale: scale4 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.8, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100%"
                w="100%"
                bg="#FDC6C6"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="2"
                drag
                dragMomentum={false}
                dragConstraints={constraintsRef}
                dragSnapToOrigin
                onClick={isDragging ? null : setWarning}
                onDrag={eventControl}
                onStop={eventControl}
                onDragEnd={openSubject4}>
                <Text
                  as={motion.p}
                  fontSize={{ sm: "5xl", md: "6xl" }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer">
                  {subjects ? subjects[3].name : null}
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: "-230%", y: "-80%" }}
              viewport={{ once: true }}
              position="absolute"
              h={{ sm: "15vw", md: "8vw" }}
              w={{ sm: "15%", md: "8%" }}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Box
                as={motion.div}
                style={{ x: x5, scale: scale5 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 1, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100%"
                w="100%"
                bg="#FDC6C6"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="1"
                drag
                dragMomentum={false}
                dragConstraints={constraintsRef}
                dragSnapToOrigin
                onClick={isDragging ? null : setWarning}
                onDrag={eventControl}
                onStop={eventControl}
                onDragEnd={openSubject5}>
                <Text
                  as={motion.p}
                  fontSize={{ sm: "5xl", md: "6xl" }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer">
                  {subjects ? subjects[4].name : null}
                </Text>
              </Box>
            </Box>
            <Box
              h="35%"
              w="35%"
              border="2px"
              borderStyle="dashed"
              borderColor="#E9B6B6"
              borderRadius="50%"
              bg="radial-gradient(#FDEBEB, #FDC6C6)"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Text color="#FDC6C6" fontSize="6xl">
                ?
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          rowStart={{ sm: 5, md: 5 }}
          rowEnd={{ sm: 5, md: 9 }}
          colStart={{ sm: 1, md: 1 }}
          colEnd={{ sm: 1, md: 1 }}
          display="flex"
          justifyContent="center"
          alignItems={{ sm: "center", md: "start" }}>
          {warning ? (
            <Box
              as={motion.div}
              marginTop={{ sm: 0, md: "10%" }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 10, -10, 10, -10, 0],
                duration: "0.5",
              }}
              bg="#EC7E7E"
              h={{ sm: "65%", md: "30%" }}
              w={{ sm: "80%", md: "90%" }}
              p="2%"
              border
              borderRadius="30px"
              display="flex">
              <Box
                w="25%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRight="solid 1px white">
                <Text color="white" fontSize="6xl">
                  !
                </Text>
              </Box>
              <Box
                w="75%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderLeft="solid 1px white">
                <Text color="white" fontSize="sm" marginLeft="7%">
                  ¡Un click no es suficiente! Arrastrá el emoji al centro.
                </Text>
              </Box>
            </Box>
          ) : null}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Widget;
