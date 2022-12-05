import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const CardItem = ({ note }) => {
  const router = useRouter();
  return (
    <Card marginTop={"20px"}>
      <CardBody>
        <Image
          alt="photo"
          src={note.field_img_primary}
          width="190"
          height="130"
        />
        <Text 
          cursor="pointer"
          onClick={()=>router.replace({
            ...router,
            pathname: `/notes/byURL/${note.url}`,
          })}
        >
          {note.title}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CardItem;
