import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const CardItem = ({ nota }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <>
          <Image
            src={nota.field_img_primary}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Link href={`notes/byURL/${nota.url}`}>
              <Heading size="md">{nota.title}</Heading>
              <Text>{nota.field_description}</Text>
            </Link>
          </Stack>
        </>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CardItem;
