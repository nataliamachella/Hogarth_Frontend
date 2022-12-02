import { Card, CardBody, Image, Text } from "@chakra-ui/react";

const CardItem = ({ nota }) => {
  return (
    <Card wmaxW="sm">
      <Image src={nota.field_img_primary} alt={nota.title} />
      <CardBody>
        <Text>
          <strong>{nota.title} </strong>
          {nota.field_description}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CardItem;
