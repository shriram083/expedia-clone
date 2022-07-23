import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useReducer, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authActions';
// import { reducer } from '../redux/auth/authReducer';
import {useNavigate} from "react-router-dom";
import { REGISTER_SUCCESS } from '../redux/auth/authTypes';

function reducer(state,action){
  switch(action.type){
    case "firstname":
      return{
        ...state,
        firstname:action.payload
      }
      case "lastname":
        return{
          ...state,
          lastname:action.payload
        }
    case "email":
      return{
        ...state,
        email:action.payload
      }
      case "password":
        return{
          ...state,
          password:action.payload
        }
      
      default:
        return state
  }

}

const initialState={
  firstname:"",
  lastname:"",
  email:"",
  password:"",
}

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [state,setter] = useReducer(reducer,initialState);
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const signupHandler=()=>{
    dispatch(register(state)).then((res)=>{
      if(res===REGISTER_SUCCESS){
        navigate("/signin",{replace:true})
      }
    })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Create Account
          </Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
              <Box>
                <FormControl id="firstName"  isRequired>  
                  <Input type="text" value={state.firstname} onChange={(e)=>
                  setter({type:"firstname",payload:e.target.value})} placeholder='first name'/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" >   
                 <Input type="text" placeholder='last name' value={state.lastname} onChange={(e)=>
                  setter({type:"lastname",payload:e.target.value})}/>
                </FormControl>
              </Box>
            <FormControl id="email"isRequired>
            <Input type="email"  placeholder='email address' value={state.email} onChange={(e)=>
                  setter({type:"email",payload:e.target.value})}/>
            </FormControl>
            <FormControl id="password" isRequired>
            <InputGroup>
                <Input placeholder='password' type={showPassword ? 'text' : 'password'} value={state.password} onChange={(e)=>
                  setter({type:"password",payload:e.target.value})}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            
            <Stack spacing={10} pt={2}>
            <Text fontSize={"12px"}>By creating an account, I agree to the Expedia Terms and Conditions, Privacy Statement and Expedia Rewards Terms and Conditions.</Text>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={signupHandler}>
                Continue
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href={"/signin"}color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}