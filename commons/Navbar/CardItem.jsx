import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const CardItem = ({ note }) => {
  const router = useRouter();
  return (
    <Card marginTop={"20px"} variant="unstyled">
      <CardBody>
        <Image
          alt="photo"
          src={note.field_img_primary}
          width="100%"
          height="auto"
        />
        <Text
          mt="5px"
          textAlign="left"
          cursor="pointer"
          onClick={() =>
            router.replace({
              ...router,
              pathname: `${note.subCategory.url}/${note.subCategory.category.url}/${note.url}`,
            })
          }
        >
          <Text fontWeight="bold" fontFamily="PPEiko-Black">{note.field_title_pre}</Text><Text>{note.field_title}</Text>
        </Text>
      </CardBody>
    </Card>
  );
};

export default CardItem;
