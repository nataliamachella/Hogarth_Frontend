import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

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
            <Heading size="md">{nota.title}</Heading>
            <Text>{nota.field_description}</Text>
          </Stack>
        </>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CardItem;
