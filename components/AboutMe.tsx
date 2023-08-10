import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AboutMe = () => {
  return (
    <Flex maxW="1200px" mx="auto" align="center" flexDirection="column" mt={8}>
      <MotionBox
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/profile.jpg"
          alt="Kanishk"
          borderRadius="full"
          boxSize="200px"
        />
      </MotionBox>
      <Box mt={4}>
        <Text fontSize="lg">
          Hi, I'm Kanishk! I'm a passionate software engineer with expertise in
          (STUFF). I love building web applications that make a positive impact
          on people's lives. Here, you can find some of my projects and learn
          more about my skills and experiences. Feel free to reach out to me
          through the contact page!
        </Text>
      </Box>
      <div className="custom-cursor" /> {/* Add the custom cursor */}
    </Flex>
  );
};

export default AboutMe;
