import { Card, CardBody, Image, Text } from "@chakra-ui/react";

const CardItem = ({ note }) => {
  return (
    <Card marginTop={"20px"}>
      <CardBody>
        <Image
          alt="photo"
          src={note.field_img_primary}
          width="190"
          height="130"
        />
        <Text>{note.title}</Text>
      </CardBody>
    </Card>
  );
};

export default CardItem;
