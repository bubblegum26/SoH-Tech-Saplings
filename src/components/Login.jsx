import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share1.mp4';

import { client } from '../client';

const Login = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/home2'; 
    navigate(path);
  }
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 w-full" >
          <form class="w-full max-w-lg bg-slate-200 bg-opacity-25 p-3 px-20 rounded-lg justify-center">
            <h5 className='mb-5 text-orange-500 text-lg font-bold'>Create an Account</h5>
            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label class="block uppercase tracking-wide text-xs  mb-2 text-white" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Shraddha" />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-white text-xs  mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Pattnaik" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-white text-xs  mb-2" for="grid-password">
                  Phone Number
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="tel" placeholder="8114980250"  />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-white text-xs  mb-2" for="grid-password">
                  Password
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="8114980250" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-white text-xs  mb-2" for="grid-password">
                  City
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Jajpur" />
              </div>
            </div>
            <div class="inline-block relative w-full">
              <label class="block uppercase tracking-wide text-white text-xs  mb-2" for="grid-password">
                Supplier or Volunteer
              </label>
              <select class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Supplier</option>
                <option>Volunteer</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-3 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            <div class="flex items-start mb-3 mt-2">
              <div class="flex items-center h-5">
                <input id="terms" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800" required />
              </div>
              <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="/" class="text-orange-600 hover:underline dark:text-orange-500">terms and conditions</a></label>
            </div>
            <button type="submit" class="flex justify-center self-center text-center text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 justify-center mx-auto" onClick={routeChange}>Register new account</button>
            <div className='flex self-center justify-center '>
              or
            </div>

            <div className="flex justify-center self-center text-center">
              <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                render={(renderProps) => (
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className="mr-4" /> Sign in with google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
