import React from "react";
import { Stack, Heading, Image} from "@chakra-ui/react";
import { motion } from "framer-motion";

const transitionValues = {
  duration: 0.3,
  yoyo: Infinity,
  ease: "easeOut",
};

const Loading = () => {
  return (
    <Stack
      align="center"
      bg="neutral"
      height="100vh"
      justify="center"
      width="100vw"
    >
      <motion.image
        animate={{
          y: ["0%", "-100%"],
        }}
        transition={{
          y: transitionValues,
          width: transitionValues,
          height: transitionValues,
        }}
      >
        <Image src="../assets/logo.svg" w={10} />
      </motion.image>
      <Heading textAlign="center">Loading...</Heading>
    </Stack>
  );
};

export default Loading;
