import React from "react";
import { Stack, Image, Button, Text } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { usePoints } from "../hooks/usePoints";

const ProductHover = ({ id, cost }) => {

  const { redeem, loading } = usePoints();

  const redeemProduct = () => {
    if (!loading) {
      redeem(id, cost);
    } else {
      Swal.fire({
        icon: "error",
        title: "Can't redeem",
        text: "You can't redeem now, await actual redeem",
      });
    }
  };

  return (
    <Stack
      bgGradient="linear(to-b, #0ad4faCC 0%, #25bbf1CC 100%)"
      height="100%"
      left="0"
      opacity={0}
      padding={2.5}
      position="absolute"
      top="0"
      rounded={4}
      spacing={4}
      width="100%"
      transitionDuration="0.4s"
      transitionProperty="transform"
      _hover={{
        opacity: "1",
      }}
      zIndex={200}
    >
      <Image
        src="../assets/icons/buy-white.svg"
        maxH="42px"
        maxW="42px"
        alignSelf="flex-end"
        loading="lazy"
      />

      <Stack isInline justify="center" align="center">
        <Text
          fontSize="36px"
          letterSpacing="-0.08px"
          textAlign="center"
          color="white"
        >
          {cost}
        </Text>
        <Stack>
          <Image
            boxSize="36px"
            borderRadius="100%"
            marginTop={2.5}
            src="../assets/icons/coin.svg"
            loading="lazy"
          />
        </Stack>
      </Stack>
      <Button
        rounded={999}
        backgroundColor="white"
        isLoading={loading}
        onClick={redeemProduct}
      >
        Redeem now
      </Button>
    </Stack>
  );
};

export default ProductHover;
