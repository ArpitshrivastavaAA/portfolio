import { Box, Center, Text, Stack, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";

import LinkedinButton from "./LinkedInFollowBtn";
import { useTheme } from "../../Context/AppContext";
// import { useColorModeValue } from "../ui/color-mode";

const MotionText = motion(Text);
const MotionBox = motion(Box);

export default function SocialProfileSimple() {
  const { Theme } = useTheme();

  const light = {
    backgroundColor: "#E9D8FD",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <MotionText
        color="#805AD5"
        fontSize={{ base: "22px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
        textAlign="center"
        initial={{ opacity: 0 }} // Initial state for fade-in
        animate={{ opacity: 1 }} // Final state after animation
        transition={{ duration: 1 }} // Transition duration
      >
        About Me
      </MotionText>
      <Center style={Theme === "light" ? light : dark}>
        <MotionBox
          style={Theme === "light" ? light : dark}
          maxW={{ base: "400px", md: "500px", lg: "550px" }}
          w={"full"}
          // bg={useColorModeValue("white", "gray.900")}
          rounded={"lg"}
          textAlign={"center"}
          initial={{ opacity: 0 }} // Initial state for fade-in
          animate={{ opacity: 1 }} // Final state after animation
          transition={{ duration: 1 }} // Transition duration
        >
          <Text
            textAlign={"justify"}
            // color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            style={Theme === "light" ? light : dark}
            width={{ base: "90%" }}
            m="auto"
          >
            I’m a passionate Fullstack Developer skilled in building engaging and
            scalable user interfaces. Adaptable, open to feedback, and always
            eager to grow. A self-motivated learner with strong communication
            and teamwork skills, driven by a problem-solving mindset.
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              // bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #WebDesign
            </Badge>
            <Badge
              px={2}
              py={1}
              // bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #Full stack
            </Badge>
            <Badge
              px={2}
              py={1}
              // bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #tech
            </Badge>
          </Stack>

          <Stack mt={1} direction={"row"} spacing={4}>
            <a
              href="https://www.linkedin.com/in/arpit-shrivastava-85a331260//"
              rel="noreferrer"
              target="_blank"
              style={{ width: "90%", margin: "auto" }}
            >
              <LinkedinButton />
            </a>
          </Stack>
        </MotionBox>
      </Center>
    </>
  );
}
