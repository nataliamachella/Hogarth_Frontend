import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

const CardItem = ({ nota }) => {
  return (
    <Card width="33%">
      <CardBody>
        <>
          <Image src={nota.field_img_primary} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Link href={`notes/byURL/${nota.url}`}>
              <Heading size="md">{nota.title}</Heading>
            </Link>
          </Stack>
        </>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CardItem;
