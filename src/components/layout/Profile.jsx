import { Box, Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";


function Profile() {
  const handleDownload = () => {
    return window.open(
      "https://resume-builder-test-new.masaischool.com/resume/?resumeId=679bcd14f97830ef5e8bf7d2&profileId=self&templateName=TwoColumnMinimal&fontSize=medium"
    );
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Box height={{ base: "50px", md: "80px" }}></Box>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Flex
          w={{ base: "100%", md: "80%" }}
          m="auto"
          alignItems="center"
          justifyContent={{ base: "center", md: "space-around" }}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          rowGap={{ base: "10px", md: "10px" }}
          mt={{ base: "20px", md: "10px", lg: "40px" }}
        >
          <Box
            fontSize={{ base: "18px", md: "35px", lg: "55px" }}
            width={{ base: "90%", md: "100%", lg: "45%" }}
            m={{ base: "auto", lg: "0" }}
            fontWeight="600"
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={{ base: "28px", md: "50px", lg: "80px" }}
          >
            <Flex
              justifyContent="center"
              gap="5px"
              direction={{ base: "row", lg: "column" }}
            >
              <Flex>
                <Text color="#RGBA(0, 0, 0, 0.64)">
                  <b>Hello</b>
                </Text>
                {/* <Image
                  mt="-5px"
                  w={{ base: "40px", md: "60px", lg: "85px" }}
                  src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif"
                /> */}
              </Flex>

              <Text color="#RGBA(0, 0, 0, 0.64)">
                {" "}
                <b>I,Am</b> <b style={{ color: "#805AD5" }}>Arpit Shrivastava</b>
              </Text>
            </Flex>
            <Text color="#RGBA(0, 0, 0, 0.64)   ">
              <b>Frontend Developer</b>
            </Text>
            <Text
              as={Link}
              _hover={{ textDecoration: "none" }}
              download={true}
              href={"https://resume-builder-test-new.masaischool.com/resume/?resumeId=679bcd14f97830ef5e8bf7d2&profileId=self&templateName=TwoColumnMinimal&fontSize=medium"}
              onClick={handleDownload}
              target="_blank"
            >
              <Button
                size={{ base: "sm", md: "md", lg: "lg" }}
                mt={{ base: "10px", md: "0" }}
                colorScheme="purple"
              >
                Resume{" "}
                <b style={{ marginLeft: "5px" }}>
                  <HiDownload />
                </b>{" "}
              </Button>{" "}
            </Text>
          </Box>

          <Box>
            <Image
              src="https://i.ibb.co/QXrJ53m/profile-pic-8.png"
              shadow="lg"
              mt={{ base: "10px", md: "0px" }}
              w={{ base: "150px", md: "200px", lg: "350px" }}
              borderRadius="50%"
              alt="Arpit"
            />
          </Box>
        </Flex>
      </motion.div>
    </>
  );
}

export default Profile;
