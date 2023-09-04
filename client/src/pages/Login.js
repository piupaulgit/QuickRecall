import React from 'react'
import {AiOutlineGooglePlus} from 'react-icons/ai'

const Login = () => {
  return (
    <div className=' h-[100vh] flex flex-col justify-center items-center'>
        <a className=' bg-white px-4 py-2 rounded-sm flex gap-2 items-center' href="http://localhost:8000/auth/google">
            <AiOutlineGooglePlus className=' text-[#f44336]' size={30}/>
            Login with Gmail</a>
            
    </div>
  )
}

export default Login;