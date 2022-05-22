import React from "react";
import GoogleLogin from "react-google-login";
import { useRouter } from 'next/router'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter()
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
        _id: googleId,
        _type: 'user',
        userName: name,
        image: imageUrl,
    }

    client.createIfNotExists(doc)
        .then(() => {
            router.push('/', { shallow: true })
        })
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-secondary">
      <GoogleLogin
        clientId="586746427427-ou73m0pue28tcd53cv5fdf836vc6bs6g.apps.googleusercontent.com"
        render={(renderProps) => (
          <>
            <h4 className="py-2 font-medium text-primary">or login with:</h4>
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="flex items-center rounded-lg bg-gray-300 px-20 py-2 shadow-2xl active:bg-gray-200"
            >
              <FcGoogle className=" text-3xl" />
              <span className="font-medium text-primary">oogle</span>
            </button>
          </>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Login;
