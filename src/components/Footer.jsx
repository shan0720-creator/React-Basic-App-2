import React from 'react'
import { Box, Button, HStack, requiredChakraThemeKeys } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import {AiOutlineSend} from "react-icons/ai";
import { Input } from '@chakra-ui/react';




const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
         <Stack direction = {['column','row']}>
            <VStack>
                <heading size="md" textTransform={"uppercase"} textalign={["centre","left"]} >
                    Subscribe to get Updates
                </heading>
            </VStack>
            <HStack borderBottom={"2px solid white"} py="2">
                <Input placeholder = "Enter Email Here..." border={"none"} borderRadius="none" outline={"none"} focusBorderColor="none" />
                <Button p={"0"} colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>
            </Stack>
            </Box>
      
  
}

export default Footer