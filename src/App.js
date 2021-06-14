import { Stack } from "@chakra-ui/react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Stack
      maxW="1440px"
      width="100%"
      margin="auto"
      bg="#f9f9f9"
      m={{ base: 0, xl: 4 }}
      spacing={0}
      minH="100vh"
    >
      <Navbar />
      <AppRouter />
    </Stack>
  );
};

export default App;
