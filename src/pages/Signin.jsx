import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; 
import {Link as RouterLink,useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../redux/auth/authTypes';
import { login } from '../redux/auth/authActions';

export default function Login() {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(state=>state.authReducer.isLoading);

  const loginHandler=()=>{
    if(email && password){
      const params ={
        email,password
      }
      dispatch(login(params)).then((res)=>{
        if(res===LOGIN_SUCCESS){
          navigate("/",{replace:true})
        }
        else{
          alert("invalid email or password");
        }
      })
    }
  }



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              
              <Input type="email" value={email} placeholder='Email address' onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              
              <Input type="password" value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>This is a public or shared device</Checkbox>                
              </Stack>
              <Text fontSize={"12px"}>By signing in, I agree to the Expedia Terms and Conditions, Privacy Statement and Expedia Rewards Terms and Conditions.</Text>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={loginHandler}>
                Sign in
              </Button>
            </Stack>
            <Center><Link color={'blue.400'}>Forgot password?</Link></Center>
            <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justifyContent={"center"}>
                <Box>Don't have an account?</Box>
                <Link href="/signup"color={'blue.400'}>CreateOne</Link>                
              </Stack>
              <Center>or continue with</Center>
              <Stack justifyContent={"center"}>
                <Box></Box>
                <Box></Box>
                <Box>{<FcGoogle/>}</Box>
              </Stack>    
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}