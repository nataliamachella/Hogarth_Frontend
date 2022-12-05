import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const CardItem = ({ nota }) => {
  return (
    <Card h="340px" w="300px" mt="10px">
      <Image src={nota.field_img_primary} h="200px" w="100%" />
      <CardBody>
        <Link href={`notes/byURL/${nota.url}`}>
          <Text>
            <strong>{nota.title}</strong>
            {nota.description}
          </Text>
        </Link>
      </CardBody>
    </Card>
  );
};

export default CardItem;
