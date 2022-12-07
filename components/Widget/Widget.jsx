import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Widget = () => {
  const constraintsRef = useRef(null);

  const openExcitedNote = (e) => {
    e.preventDefault();
    window.open("https://www.facebook.com");
  };

  const y1 = useMotionValue(0);
  const scale1 = useTransform(y1, [-100, 0, 240, 480], [0.5, 1, 1.8, 1]);

  const x2 = useMotionValue(0);
  const scale2 = useTransform(x2, [0, -230, -460], [1, 1.8, 1]);

  const xEx = useMotionValue(0);
  const scaleEx = useTransform(xEx, [0, -230], [1, 1.8]);
  const opacityEx = useTransform(xEx, [0, 10, -220, -230], [0, 1, 1, 0]);

  const y3 = useMotionValue(0);
  const scale3 = useTransform(y3, [0, -190, -380], [1, 1.8, 1]);

  const y4 = useMotionValue(0);
  const scale4 = useTransform(y4, [0, -190, -380], [1, 1.8, 1]);

  const x5 = useMotionValue(0);
  const scale5 = useTransform(x5, [0, 230, 460], [1, 1.8, 1]);

  const [warning, setWarning] = useState(true);

  useEffect(() => setWarning(false), [warning]);

  const [isDragging, setIsDragging] = useState(false);

  const eventControl = (event, info) => {
    if (event.type === "pointermove" || event.type === "touchmove") {
      setIsDragging(true);
    }
  };

  return (
    <Box
      h="755px"
      w="100vp"
      p="25px 0px 25px"
      bg="#FDEBEB"
      display="flex"
      alignItems="center"
      justifyContent="center"
      id="Widget"
    >
      <Grid
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        height="700px"
        width="1070px"
      >
        <GridItem rowStart={2} rowEnd={5}>
          <Heading size="lg" color="#B9459E">
            ¿Cómo te sentís en este momento?
          </Heading>
          <Text size="md" color="#757575" m="10px 0px 10px">
            Te recomendamos una nota adecuada para tu mood de hoy.
          </Text>
        </GridItem>
        <GridItem
          rowSpan={8}
          colSpan={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            h="75%"
            w="75%"
            borderWidth="40px"
            borderColor="#FDC6C6"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            ref={constraintsRef}
          >
            <Box
              as={motion.div}
              style={{ y: -240 }}
              viewport={{ once: true }}
              position="absolute"
              h="100px"
              w="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                as={motion.div}
                style={{ y: y1, scale: scale1 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.2, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100px"
                w="100px"
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
                onDragEnd={openExcitedNote}
              >
                <Text
                  as={motion.p}
                  fontSize="6xl"
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer"
                >
                  😍
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: 230, y: -80 }}
              viewport={{ once: true }}
              position="absolute"
              h="100px"
              w="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                as={motion.div}
                style={{ x: x2, scale: scale2 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.4, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100px"
                w="100px"
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
              >
                <Text
                  as={motion.p}
                  fontSize="6xl"
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer"
                >
                  😃
                </Text>
              </Box>
              <Box
                as={motion.div}
                whileInView={{
                  x: -230,
                  y: 80,
                  transition: { delay: 4, duration: 2 },
                }}
                viewport={{ once: true }}
                style={{ x: xEx, scale: scaleEx, opacity: opacityEx }}
                position="absolute"
                h="100px"
                w="100px"
                bg="#FDC6C6"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="6"
              >
                <Text fontSize="6xl">😃</Text>
                <Text
                  marginTop="70px"
                  marginLeft="50px"
                  position="absolute"
                  fontSize="6xl"
                  zIndex="7"
                >
                  👆🏻
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: 155, y: 190 }}
              viewport={{ once: true }}
              position="absolute"
              h="100px"
              w="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                as={motion.div}
                style={{ y: y3, scale: scale3 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.6, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100px"
                w="100px"
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
              >
                <Text
                  as={motion.p}
                  fontSize="6xl"
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer"
                >
                  😐
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: -155, y: 190 }}
              viewport={{ once: true }}
              position="absolute"
              h="100px"
              w="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                as={motion.div}
                style={{ y: y4, scale: scale4 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 0.8, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100px"
                w="100px"
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
              >
                <Text
                  as={motion.p}
                  fontSize="6xl"
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer"
                >
                  🙁
                </Text>
              </Box>
            </Box>
            <Box
              as={motion.div}
              style={{ x: -230, y: -80 }}
              viewport={{ once: true }}
              position="absolute"
              h="100px"
              w="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                as={motion.div}
                style={{ x: x5, scale: scale5 }}
                whileInView={{
                  rotate: 360,
                  transition: { delay: 1, duration: 1 },
                }}
                viewport={{ once: true }}
                position="absolute"
                h="100px"
                w="100px"
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
              >
                <Text
                  as={motion.p}
                  fontSize="6xl"
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  cursor="pointer"
                >
                  😭
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
              justifyContent="center"
              //   flexDirection="column"
            >
              <Text color="#FDC6C6" fontSize="6xl">
                ?
              </Text>
              {/* <Box
                h="100%"
                w="100%"
                marginTop="15%"
                paddingRight="5%"
                display="flex"
                alignItems="center"
                justifyContent="space-evenly">
                <Box
                marginLeft="5%"
                  h="25%"
                  w="12%"
                  border="2px"
                  borderColor="#FDC6C6"
                  borderStyle="dashed"
                  borderRadius="50%"
                />
                <Box
                  h="25%"
                  w="12%"
                  border="2px"
                  borderColor="#FDC6C6"
                  borderStyle="dashed"
                  borderRadius="50%"
                />
              </Box>
              <Box
                h="50%"
                w="100%"
                marginBottom="10%"
                display="flex"
                alignItems="start"
                justifyContent="center">
                <Box
                  h="25%"
                  w="50%"
                  border="2px"
                  borderColor="#FDC6C6"
                  borderStyle="dashed"
                  borderRadius="25%"/>
              </Box> */}
            </Box>
          </Box>
        </GridItem>
        <GridItem
          rowSpan={4}
          colSpan={1}
          display="flex"
          justifyContent="center"
        >
          {warning ? (
            <Box
              as={motion.div}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 10, -10, 10, -10, 0],
                duration: "0.5",
              }}
              bg="#EC7E7E"
              h="30%"
              w="90%"
              p="2%"
              border
              borderRadius="30px"
              display="flex"
            >
              <Box
                w="25%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRight="solid 1px white"
              >
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
                borderLeft="solid 1px white"
              >
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
