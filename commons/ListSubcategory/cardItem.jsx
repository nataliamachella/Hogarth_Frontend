import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

const CardItem = ({ note, urlSubcategory, urlCategory }) => {
  return (
    <Link href={`/${urlCategory}/${urlSubcategory}/${note.url}`}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={note.field_img_primary}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md" fontSize="16px">
              <span>{note.field_title_pre}</span>
              {note.field_title}
            </Heading>
            <Divider
              borderColor="#E32B6C"
              borderStyle="solid"
              width="24px"
              mt={10}
            />
          </CardBody>
          <CardFooter>
            <Heading as="h6" fontSize="sm" fontWeight="normal">
              por <span>{note.author}</span>
            </Heading>
          </CardFooter>
        </Stack>
      </Card>
    </Link>
  );
};

export default CardItem;
