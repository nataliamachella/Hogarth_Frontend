import { Card, CardBody, Image, Stack, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const CardItem = ({ nota }) => {
  return (
    <Card h="auto" w="30%" m="4% 1% 1% 1%">
      <CardBody>
        <>
          <Image src={nota.field_img_primary} />
          <Stack mt="6" spacing="3">
            <Link
              href={`/${nota.subCategory.url}/${nota.subCategory.category.url}/${nota.url}`}
            >
              <Heading size="md">{nota.title}</Heading>
              <Text>{nota.field_description}</Text>
            </Link>
          </Stack>
        </>
      </CardBody>
    </Card>
  );
};

export default CardItem;
