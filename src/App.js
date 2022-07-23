import "./App.css";
import {
  ChakraProvider,
  Box,
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Button onClick={onOpen}>Tomato</Button>
      {/* <Modal isOpen={isOpen} onClose={onClose}> */}
      <Modal isOpen={isOpen}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Modal Header</ModalHeader>
            <ModalCloseButton />
            <Box>Test</Box>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
