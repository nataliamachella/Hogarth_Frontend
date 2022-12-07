import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const CardItem = ({ note }) => {
  console.log(note)
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
            pathname: `${note.subCategory.url}/${note.subCategory.category.url}/${note.url}`,
          })}
        >
          {note.title}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CardItem;
