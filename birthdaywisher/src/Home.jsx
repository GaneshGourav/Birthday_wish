import { Button, Container, Input, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const Home = () => {
  const [name, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container color={"teal"} fontFamily={"cursive"} paddingTop={"30px"}>
        Hey, this is for your
      </Container>
      <Container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Container
          border={"1px solid teal"}
          padding={"70px"}
          margin={"50px"}
          borderRadius={"8px"}
        >
          <Input
            type="text"
            placeholder="type your Lovely name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br /> <br />
          <Button onClick={onOpen} colorScheme="teal">
            See Your Gift
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} width="200px" height="100%">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign={"center"} fontSize={"60px"}>
                🎉
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody
                textAlign={"center"}
                fontFamily={"cursive"}
                color={"teal"}
                fontSize={"18px"}
              >
                {`Hey my dear love ${name}`} <br />
                <br />
                {`Happy Birthday Dear Darling 💃${name} 💃`}
                <br />
                <br />
                {` Have a bright future ahead!`}
              </ModalBody>
              <br />
              <br />
            </ModalContent>
          </Modal>
        </Container>
      </Container>
    </>
  );
};
