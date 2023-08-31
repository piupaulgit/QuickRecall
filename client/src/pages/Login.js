import React from 'react'

const Login = () => {
  const responseGoogle = (response) => {
    // Handle the response from Google authentication
    const googleAccessToken = response.access_token;
    // Call your API here using the extracted access tokenc
    console.log(googleAccessToken)
  };
  return (
    <div className=' bg-[#3f51b5] h-[100vh] flex flex-col justify-center items-center'>
        <a className=' bg-white px-4 py-2 rounded-sm flex gap-2 items-center' href="http://localhost:8000/auth/google"></a>
            {/* <AiOutlineGooglePlus className=' text-[#f44336]' size={30}/>
            Login with google</a>
            <GoogleOAuth
            clientId="302887649810-se0qgo1n51kgfq4o7t7odae8uoufelup.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle} // You can handle failure similarly
            buttonText="Login with Google"
      /> */}
    </div>
  )
}

export default Login;