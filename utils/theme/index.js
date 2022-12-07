import { extendTheme } from "@chakra-ui/react";
import theming from "./theming.json";

const theme = extendTheme(theming);

/*const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: `'Raleway', sans-serif`,
  },
});
*/

export default theme;
