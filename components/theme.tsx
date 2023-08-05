import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  layerStyles: {
    base: {
      color: "red",
      // fontWeight: "medium",
    },
    highlighted: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
  fonts: {
    body: "Inter Variable, sans-serif",
    heading: "Inter Variable, sans-serif",
    anybodyVariable: "Anybody Variable",
  },
  colors: {
    red: "#A30101",
    pink: "#FFC8CC",
    white: "#FFFEFE",
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: "20px",
      },
    },
    Heading: {
      baseStyle: {
        fontSize: "30px",
      },
    },
  },
});

export default theme;

