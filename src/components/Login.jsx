import { VStack , Container, Heading} from '@chakra-ui/react'
import React from 'react'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Button , Text} from '@chakra-ui/react';


const Login = () => {
  return <Container maxW = {"container.xl"} h={"100vh"} p={"16"}>
        <form action="">
          <VStack alignItems={"stretch"} spacing={"8"} w={"96"} m={"auto"} my={"16"}>
            <Heading>
                Welcome Back!
            </Heading>
            <Input placeholder={"Email"} type={"email"} required/>
            <Input placeholder={"password"} type={"password"} required/>
            <Button variant={"link"} alignSelf={"flex-end"}><Link to={"/forgetpassword"}>Forget Password?</Link></Button>
            <Button colorScheme={"purple"} type={"submit"}>
                Log In
            </Button>
            <Text textAlign={'right'}>
                New User
            </Text>
            <Button variant={"link"} colorScheme={"purple"} alignSelf={"flex-end"}><Link to={"/forgetpassword"}>SignUp </Link></Button>

          </VStack>


        </form>



  </Container>
    
}

export default Login