import {
  Box,
  Card,
  CardBody,
  Collapse,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const CollapseComponent = ({ isOpen, onOpen, onClose, category }) => {
  return (
    <Collapse
      in={isOpen}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      width="100%"
      position="absolute"
    >
      <Stack
        direction={["column", "row"]}
        spacing="100px"
        zIndex={2}
        bg="#E2E8F0"
      >
        <Box textAlign={"center"}>
          {category
            ? category.subCategories.map((subCategory, i) => {
                return (
                  <Link href={`/${category.url}/${subCategory.url}`} key={i}>
                    <Box key={i}>{subCategory.name}</Box>
                  </Link>
                );
              })
            : null}
        </Box>
        <Box maxWidth="100%">
          <Grid templateColumns={`repeat(3, 1fr)`}>
            <Card marginTop={"20px"}>
              <CardBody>
                <Image
                  alt="photo"
                  src="/assets/photoFaker.jpg"
                  width="190"
                  height="130"
                />
                <Text>Lorem ipsum dolor sit amet la la la.</Text>
              </CardBody>
            </Card>
            <Card marginTop={"20px"}>
              <CardBody>
                <Image
                  alt="photo"
                  src="/assets/photoFaker.jpg"
                  width="190"
                  height="130"
                />
                <Text>Lorem ipsum dolor sit amet la la la.</Text>
              </CardBody>
            </Card>
            <Card marginTop={"20px"}>
              <CardBody>
                <Image
                  alt="photo"
                  src="/assets/photoFaker.jpg"
                  width="190"
                  height="130"
                />
                <Text>Lorem ipsum dolor sit ametla la la.</Text>
              </CardBody>
            </Card>
          </Grid>
        </Box>
      </Stack>
    </Collapse>
  );
};
export default CollapseComponent;
