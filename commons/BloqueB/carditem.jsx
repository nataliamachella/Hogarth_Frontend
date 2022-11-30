import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";

const CardItem = ({ nota }) => {
  return (
    <Card width="33%">
      <CardBody>
        <>
          <Image src={nota.field_img_primary} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nota.title}</Heading>
          </Stack>
        </>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CardItem;
