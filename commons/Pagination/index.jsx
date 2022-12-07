import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

const Pagination = ({ setCurrent, current, totalPages }) => {
  let pages;
  if (totalPages < 10) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  return (
    <Box>
      {pages.map((item) => (
        <Button onClick={() => setCurrent(item)} key={item}>
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default Pagination;
