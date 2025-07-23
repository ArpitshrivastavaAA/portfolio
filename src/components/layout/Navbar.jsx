/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import { useTheme } from "../../Context/AppContext";

function Navbar({ ProfileRef, AboutRef, SkillsRef, ProjectsRef, ContactRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Theme } = useTheme();

  const handleDownloadAndOpen = () => {
    const driveFileId = "1laWmARRcB_ndPANLcfz_eQHupS_MBSfL";
    const directDownloadLink = `https://drive.google.com/uc?id=${driveFileId}&export=download`;
    const viewLink = `https://drive.google.com/file/d/${driveFileId}/view`;

    const downloadLink = document.createElement("a");
    downloadLink.href = directDownloadLink;
    downloadLink.download = "Arpit_Shrivastava_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    window.open(viewLink, "_blank");
  };

  const light = {
    backgroundColor: "white",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <>
      <Box
        px={4}
        style={Theme === "light" ? light : dark}
        className="ChackraNavBar"
        shadow="lg"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            style={Theme === "light" ? light : dark}
            size="lg"
            icon={isOpen ? <FaTimes /> : <FaBars />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            w="90%"
            m={"auto"}
            color="#RGBA(0, 0, 0, 0.64)"
          >
            <Box p="5px">
              <Heading
                fontFamily="'Italianno', cursive"
                fontWeight="bold"
                fontSize="38px"
                color={Theme === "light" ? "black" : "white"}
              >
                AS
              </Heading>
            </Box>
            <Flex
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              gap="10px"
              w={{ base: "", md: "60%", lg: "40%" }}
              justifyContent="space-between"
              alignItems="center"
              color="#805AD5"
              fontWeight="650"
            >
              <Text onClick={ProfileRef} cursor="pointer">Home</Text>
              <Text onClick={AboutRef} cursor="pointer">About Me</Text>
              <Text onClick={SkillsRef} cursor="pointer">Skills</Text>
              <Text onClick={ProjectsRef} cursor="pointer">Project</Text>
              <Text onClick={ContactRef} cursor="pointer">Contact</Text>
              <Text onClick={handleDownloadAndOpen} cursor="pointer">Resume</Text>
            </Flex>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            style={Theme === "light" ? light : dark}
          >
            <Stack as={"nav"} spacing={4} color="#805AD5" fontWeight="600">
              <Text onClick={ProfileRef} cursor="pointer">Home</Text>
              <Text onClick={AboutRef} cursor="pointer">About Me</Text>
              <Text onClick={SkillsRef} cursor="pointer">Skills</Text>
              <Text onClick={ProjectsRef} cursor="pointer">Project</Text>
              <Text onClick={ContactRef} cursor="pointer">Contact</Text>
              <Text onClick={handleDownloadAndOpen} cursor="pointer">Resume</Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
