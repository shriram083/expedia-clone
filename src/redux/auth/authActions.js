import axios from "axios";
import * as types from "./authTypes";


const register=(payload)=>dispatch=>{
    dispatch({type:types.REGISTER_REQUEST})
    return axios.post("https://reqres.in/api/register",payload)
    .then((res)=>{dispatch({type:types.REGISTER_SUCCESS,payload:res.data})
    return types.REGISTER_SUCCESS
        }).catch((err)=>{dispatch({type:types.REGISTER_FAILURE,payload:err})
return types.REGISTER_FAILURE
})

}

const login=(params)=>dispatch=>{
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",params)
    .then((res)=>{dispatch({type:types.LOGIN_SUCCESS,payload:res.data.token})
    return types.LOGIN_SUCCESS
        })
    .catch((err)=>{dispatch({type:types.LOGIN_FAILURE,paylod:err})
        return types.LOGIN_FAILURE  
})

}


export {register,login};