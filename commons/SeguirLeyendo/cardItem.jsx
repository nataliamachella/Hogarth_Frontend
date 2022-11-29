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
      <Card maxW="sm">
        <CardBody>
          <Image
            src={note.field_img_primary}
            alt="Incendios forestales en el Río Paraná"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading as="h3" fontSize="16px">
              <span>{note.field_title_pre}</span>
              {note.field_title}
            </Heading>
          </Stack>
        </CardBody>
        <Divider borderColor="#E32B6C" borderStyle="solid" width="24px" />
        <CardFooter>
          <Heading as="h6" fontSize="sm" fontWeight="normal">
            por <span>{note.author}</span>
          </Heading>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardItem;
