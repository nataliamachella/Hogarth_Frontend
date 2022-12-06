import { Collapse, Flex, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardItem from "../../commons/Navbar/CardItem";

const CollapseComponent = ({ isOpen, onOpen, onClose, category }) => {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/notes/byCategory/${category.url}`)
      .then((notes) => setNotes(notes.data));
  }, [category]);

  return (
    <Collapse
      in={isOpen}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      style={{ width: "100%", position: "absolute", zIndex: 2 }}
    >
      <Flex
        bg="#E2E8F0"
        justifyContent="center"
        w="100%"
        pt="10px"
        pb="10px"
        ps="10px"
        pe="10px"
      >
        <Flex justifyContent="space-between" width="100%" maxW="1200px">
          <Flex flexDirection="column" pt="10px" pb="10px">
            {category
              ? category.subCategories.map((subCategory, i) => {
                  return (
                    <Link href={`/${category.url}/${subCategory.url}`} key={i}>
                      <Text
                        fontWeight={600}
                        mt="5px"
                        mb="5px"
                        cursor="pointer"
                        textTransform="uppercase"
                        fontSize="sm"
                        _hover={{ color: "#E32B6C" }}
                        key={i}
                      >
                        {subCategory.name}
                      </Text>
                    </Link>
                  );
                })
              : null}
          </Flex>
          <Flex maxWidth="75%" flexDirection="column">
            <Grid templateColumns={`repeat(3, 1fr)`} gridGap="16px">
              {notes ? (
                <>
                  {notes.slice(0, 3).map((note, i) => (
                    <CardItem note={note} key={i} />
                  ))}
                </>
              ) : null}
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </Collapse>
  );
};
export default CollapseComponent;
