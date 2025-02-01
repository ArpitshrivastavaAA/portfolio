import { Box, Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

function Profile() {
  const handleDownload = () => {
    const driveFileId = "1_hieSg-Ub1AKohAK7Jkr2jwGDYJIpy3A"; // Updated Drive file ID
    const directDownloadLink = `https://drive.google.com/uc?id=${driveFileId}&export=download`;

    // Open in a new tab
    window.open(directDownloadLink, "_blank");
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Spacer Box for Layout Adjustment */}
      <Box height={{ base: "50px", md: "80px" }}></Box>

      {/* Animated Container */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Flex
          w={{ base: "100%", md: "80%" }}
          m="auto"
          alignItems="center"
          justifyContent={{ base: "center", md: "space-around" }}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          rowGap={{ base: "10px", md: "10px" }}
          mt={{ base: "20px", md: "10px", lg: "40px" }}
        >
          {/* Text & Info Section */}
          <Box
            fontSize={{ base: "18px", md: "35px", lg: "55px" }}
            width={{ base: "90%", md: "100%", lg: "45%" }}
            m={{ base: "auto", lg: "0" }}
            fontWeight="600"
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={{ base: "28px", md: "50px", lg: "80px" }}
          >
            {/* "Hello, I am" as a Separate Text */}
            <Text
              color="#805AD5"
              fontSize={{ base: "22px", md: "40px", lg: "50px" }}
            >
              <b>Hello, I am</b>
            </Text>

            {/* Name Section */}
            <Text
              color="#805AD5"
              fontSize={{ base: "22px", md: "40px", lg: "50px" }}
              fontWeight="bold"
            >
              Arpit Shrivastava
            </Text>

            {/* "I am a Frontend Developer" Below the Name */}
            <Text
              fontSize={{ base: "18px", md: "28px", lg: "38px" }}
              color="purple.600"
              fontWeight="bold"
              mt="5px"
            >
              I am a Frontend Developer
            </Text>

            {/* Resume Download Button */}
            <Text
              as={Link}
              _hover={{ textDecoration: "none" }}
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                handleDownload();
              }}
            >
              <Button size={{ base: "sm", md: "md", lg: "lg" }} mt="10px" colorScheme="purple">
                Resume <b style={{ marginLeft: "5px" }}><HiDownload /></b>
              </Button>
            </Text>
          </Box>

          {/* Profile Image Section */}
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
