import {
  Box,
  FormControl,
  FormLabel,
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

const ListCategory = ({ data, categories, max }) => {
  const router = useRouter();

  const updateBloque = (e) => {
    axios
      .put(`/api/typeContent/change/${data.id}`, {
        name: data.name,
        urlCategory: Number.isInteger(e) ? data.urlCategory : e.target.value,
        position: Number.isInteger(e) ? e : data.position,
      })
      .then(() => console.log("success"))
      .catch((err) => console.error(err));
    return router.push("/admin/Contenido");
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
            <FormLabel>Categoria</FormLabel>
            <Select
              placeholder="Select option"
              onChange={(e) => updateBloque(e)}
              defaultValue={data.urlCategory}
            >
              {categories
                ? categories.map((category) => (
                    <option key={category.url} value={category.url}>
                      {category.name}
                    </option>
                  ))
                : null}
            </Select>
          </FormControl>
        )}
      </Box>
    </Box>
  );
};

export default ListCategory;
