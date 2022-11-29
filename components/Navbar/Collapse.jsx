import {
  Card,
  CardBody,
  Collapse,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const CollapseComponent = ({ isOpen, onOpen, onClose, category }) => {
  return (
    <Collapse
      in={isOpen}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      style={{ width: "100%", position: "absolute", zIndex: 2 }}
    >
      <Flex
        bg="#E2E8F0"
        justifyContent="center"
        w="100%"
        pt="10px"
        pb="10px"
        ps="10px"
        pe="10px"
      >
        <Flex justifyContent="space-between" width="100%" maxW="1200px">
          <Flex flexDirection="column" pt="10px" pb="10px">
            {category
              ? category.subCategories.map((subCategory, i) => {
                  return (
                    <Link
                      href={`/${category.url}/${subCategory.url}`}
                      key={i}
                      style={{ "font-weight": 600 }}
                    >
                      <Text
                        fontWeight={600}
                        mt="5px"
                        mb="5px"
                        cursor="pointer"
                        textTransform="uppercase"
                        fontSize="sm"
                        _hover={{ color: "#E32B6C" }}
                      >
                        {subCategory.name}
                      </Text>
                    </Link>
                  );
                })
              : null}
          </Flex>
          <Flex maxWidth="75%" flexDirection="column">
            <Grid templateColumns={`repeat(3, 1fr)`} gridGap="16px">
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
          </Flex>
        </Flex>
      </Flex>
    </Collapse>
  );
};
export default CollapseComponent;
