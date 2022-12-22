import { VStack , Container, Heading, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Button , Text} from '@chakra-ui/react';


const Signup = () => {
    return <Container maxW = {"container.xl"} h={"100vh"} p={"16"}>
    <form action="">
      <VStack alignItems={"stretch"} spacing={"8"} w={"96"} m={"auto"} my={"16"}>
        <Heading>
            VIDEO HUB!
        </Heading>
        <Avatar alignSelf={'center'} boxSize={"32"}></Avatar>
        <Input placeholder={"Name"} type={"text"} required/>
        <Input placeholder={"Email"} type={"email"} required/>
        <Input placeholder={"password"} type={"password"} required/>
        
        <Button colorScheme={"purple"} type={"submit"}>
            Sign Up
        </Button>
        <Text textAlign={'right'}>
            Already User?{''}
        </Text>
        <Button variant={"link"} colorScheme={"purple"} alignSelf={"flex-end"}><Link to={"/login"}>Login </Link></Button>

      </VStack>


    </form>



</Container>
}

export default Signup