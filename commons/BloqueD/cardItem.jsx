import { Card, CardBody, Image, Text, Link } from "@chakra-ui/react";

const CardItem = ({ nota }) => {
  return (
    <Card wmaxW="sm">
      <Image src={nota.field_img_primary} alt={nota.title} />
      <CardBody>
        <Link href="{`/${nota.url}`}">
          <Text>
            <strong>{nota.title} </strong>
            {nota.field_description}
          </Text>
        </Link>
      </CardBody>
    </Card>
  );
};

export default CardItem;
