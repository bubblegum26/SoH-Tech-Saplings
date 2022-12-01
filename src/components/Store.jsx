import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import BG from '../assets/BG.jpg';
import Mango from '../assets/mango.png'
import Peepal from '../assets/peepal.jpg'
import Banyan from '../assets/banyan.jpg'
import plant from '../assets/plant.jpg'
import plants from '../assets/plants.jpg'
import { client } from '../client';
import Navbar from './Navbar';
import { FiFilter } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import { BiCartAlt } from 'react-icons/bi';


const Store = () => {
  const navigate = useNavigate();
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
    <>
      <Navbar />
      <div className='flex flex-wrap mx-40 my-10 justify-between'>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <div class="input-group relative flex  items-stretch w-full mb-4 rounded">
              <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className='flex'>

          <div class="flex justify-center mr-16">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex  items-stretch w-full mb-4 rounded">
                <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Filter" aria-label="Filter" aria-describedby="button-addon2" />
                <FiFilter className='mt-2 ml-2 w-6 h-6' />
              </div>
            </div>
          </div>
          <FcLike className='mt-2 ml-2 w-6 h-6 mr-16' />
          <BiCartAlt className='mt-2 ml-2 w-6 h-6' />
        </div>
      </div>

      <h5 className='mb-5 mx-20 text-4xl font-mono font-bold'>
        Top Sellers
      </h5>


      <div className='flex flex-wrap justify-between mx-20'>
        <div class="w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center self-center">
          <a href="#">
            <img class="rounded-t-lg w-full h-64" src={Mango} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Mango Tree</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Suitable for plantation in dhenkanl/, jajpur Cuttack, <br /> Humidity-50% Temp- Above 21 degree Celcius.</p>
            <div className='flex justify-between m-2'>
              <h5>Rs 10/-</h5>
              <div className='flex'>
                <span className='mr-3'>Quantity -</span>
                <input type="number" min="10" placeholder='10' className='w-9 border-none' />
              </div>
            </div>
            <div className='flex justify-between'>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Add to Cart

              </a>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Order Now

              </a>
            </div>
          </div>
        </div>

        <div class="w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center self-center">
          <a href="#">
            <img class="rounded-t-lg w-full h-64" src={Banyan} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Banyan Tree</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Suitable for plantation in Kendrapada<br /> Humidity-40%  Temp- Between 20 to 30 degree Celcius.</p>
            <div className='flex justify-between m-2'>
              <h5>Rs 15/-</h5>
              <div className='flex'>
                <span className='mr-3'>Quantity -</span>
                <input type="number" min="10" placeholder='10' className='w-9 border-none' />
              </div>
            </div>
            <div className='flex justify-between'>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Add to Cart

              </a>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Order Now

              </a>
            </div>
          </div>
        </div>

        <div class="w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center self-center">
          <a href="#">
            <img class="rounded-t-lg w-full h-64" src={Peepal} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Peepal Tree</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Suitable for plantation in Ganjam and Koraput<br /> Humidity-60%  Temp-0 to 36 degree Celcius.</p>
            <div className='flex justify-between m-2'>
              <h5>Rs 20/-</h5>
              <div className='flex'>
                <span className='mr-3'>Quantity -</span>
                <input type="number" min="10" placeholder='10' className='w-9 border-none' />
              </div>
            </div>
            <div className='flex justify-between'>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Add to Cart

              </a>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Order Now

              </a>
            </div>
          </div>
        </div>


      </div>
      <h5 className='mb-5 mt-10 mx-20 text-4xl font-mono font-bold'>
        Combo Deals
      </h5>

      <div className='flex flex-wrap mx-20'>
        <div class="w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center self-center mr-28">
          <a href="#">
            <img class="rounded-t-lg w-full h-64" src={plant} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Mango Banyan and Peepal Tree</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className='flex justify-between m-2'>
              <h5>Rs 17/-</h5>
              <div className='flex'>
                <span className='mr-3'>Quantity -</span>
                <input type="number" min="10" placeholder='10' className='w-9 border-none' />
              </div>
            </div>
            <div className='flex justify-between'>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Add to Cart

              </a>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Order Now

              </a>
            </div>
          </div>
        </div>

        <div class="w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center self-center">
          <a href="#">
            <img class="rounded-t-lg w-full h-64" src={plants} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Banyan and Peepal Tree</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className='flex justify-between m-2'>
              <h5>Rs 25/-</h5>
              <div className='flex'>
                <span className='mr-3'>Quantity -</span>
                <input type="number" min="10" placeholder='10' className='w-9 border-none' />
              </div>
            </div>
            <div className='flex justify-between'>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Add to Cart

              </a>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
