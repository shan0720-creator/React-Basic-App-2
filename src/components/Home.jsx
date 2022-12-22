import React from 'react'
import {Box, Container} from "@chakra-ui/react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: "absolute",
    left: "30%",
    top: "50%",
    transfrom: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "0",
    size: "4xl",
    
}

const Home = () => {
  return <Box>
   <MyCarousel/>
   <Container maxW={"container.xl"} minH={"100vh"} p = "16">
    <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>Services</Heading>
    <Stack h="full" p={"4"} alignItems={'center'} direction={["column","row"]}>
        <Image src = {img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />
        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
        The standard Lorem Ipsum passage, used since the 1500s

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
1914 translation by H. Rackham
        </Text>
    </Stack>
   </Container>
  </Box>
}

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box width="full" h={"100vh"} >
        <Image src ={img1} />
        <Heading bgColor={"blackAlpha.600"} color={"white"}{...headingOptions}>Watch the Future </Heading>
        </Box>
        <Box width="full" h={"100vh"} >
        <Image src ={img2} />
        <Heading bgColor={"whiteAlpha.900"} color={"black"}{...headingOptions}>Future is Gaming </Heading>
        </Box>
        <Box width="full" h={"100vh"} >
        <Image src ={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"}{...headingOptions}>Gaming on Console </Heading>
        </Box>
        <Box width="full" h={"100vh"} >
        <Image src ={img4} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"}{...headingOptions}>Future is Gaming </Heading>
        </Box>






        
        


    </Carousel>
)

export default Home