import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { FiTrash2 } from "react-icons/fi";

const ListCategory = ({ data, category, max }) => {
  const router = useRouter();
  const removeBlock = () => {
    axios
      .delete(`/api/typeContentBC/delete/${data.id}`)
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push(`/admin/Contenido/${category.url}`);
  };
  const updateBloque = (e) => {
    console.log(data.id);
    axios
      .put(`/api/typeContentBC/change/${data.id}`, {
        name: data.name,
        urlSubCategory: Number.isInteger(e)
          ? data.urlSubCategory
          : e.target.value,
        position: Number.isInteger(e) ? e : data.position,
        category: category.url,
      })
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push(`/admin/Contenido/${category.url}`);
  };
  return (
    <Box display="flex" flexDirection="row" minW="100vh">
      <ListItem width="40%" margin="15px 0 15px 0">
        {data.name}
      </ListItem>
      <Box marginLeft="40px" display="flex" alignItems="center">
        <FormControl id="position" isRequired>
          <FormLabel>Posicion</FormLabel>
          <NumberInput
            defaultValue={data.position}
            min={1}
            max={max}
            onChange={(_, value) => updateBloque(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        {data.name == "Widget" ? null : (
          <FormControl id="urlSubCategory" isRequired>
            <FormLabel>Subcategoria</FormLabel>
            <Select
              placeholder="Select option"
              onChange={(e) => updateBloque(e)}
              defaultValue={data.urlSubCategory}
            >
              {category
                ? category.subCategories.map((subcategory) => (
                    <option key={subcategory.url} value={subcategory.url}>
                      {subcategory.name}
                    </option>
                  ))
                : null}
            </Select>
          </FormControl>
        )}
        <IconButton
          aria-label="Search database"
          icon={<FiTrash2 />}
          onClick={removeBlock}
        />
      </Box>
    </Box>
  );
};

export default ListCategory;
