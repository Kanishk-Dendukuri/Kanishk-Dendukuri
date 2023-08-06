import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import AboutMe from "./AboutMe";

const Header = () => {
  return (
    <Box as="header" bg="transparent" py={4}>
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justifyContent="space-between"
      >
        <Flex>
          <Link href="https://github.com/Kanishk-Dendukuri" isExternal>
            <IconButton
              icon={<FiGithub />}
              aria-label="GitHub"
              size="lg"
              color={useColorModeValue("gray.600", "gray.200")}
              variant="ghost"
              marginRight={2}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/kanishkdendukuri/" isExternal>
            <IconButton
              icon={<FiLinkedin />}
              aria-label="LinkedIn"
              size="lg"
              color={useColorModeValue("gray.600", "gray.200")}
              variant="ghost"
              marginLeft={2}
            />
          </Link>
        </Flex>
      </Flex>
      <AboutMe />
    </Box>
  );
};

export default Header;
