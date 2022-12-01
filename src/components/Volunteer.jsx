import React from 'react';
import Navbar from './Navbar';
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import man3 from '../assets/man3.jpg'
import man4 from '../assets/man4.jpg'
import lady1 from '../assets/lady1.jpg'
import lady2 from '../assets/lady2.jpg'
import shareVideo from '../assets/bgvid.mp4'
import signup from '../assets/signup.jpg'
import { FiFilter } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import { BiCartAlt } from 'react-icons/bi';
const Volunteer = () => {

  return (
    <>
      <Navbar />
      <div className='home-card-view flex-center'
        style={{ backgroundImage: `url(${signup})` }}>

      </div>
      <div className='flex flex-wrap mx-40 mt-10 mb-5 justify-between '>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <div class="input-group relative flex  items-stretch w-full mb-4 rounded">
              <input type="search" class="rounded-2xl form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
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
              <div class="input-group relative flex  items-stretch w-full mb-4 rounded-2xl">
                <input type="search" class="rounded-2xl form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Filter" aria-label="Filter" aria-describedby="button-addon2" />
                <FiFilter className='mt-2 ml-2 w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className='text-center text-2xl text-orange-500'> Volunteers available right now !!</h3>

      {/* cards */}
      <div class="pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ml-12">
        <div class="rounded-lg overflow-hidden shadow-lg h-3/4 w-3/4 ">
          <div className='flex flex-wrap flex-col w-full h-2/5 '>
            <img class="w-1/2 h-full m-0" src={man1} alt="man1" />
            <div className='mx-2 mt-7  font-bold text-center'>Ravish Nanada <br /> Cuttack <br /> </div>
            <div className='mx-1 mt-6 text-center text-sm whitespace-normal'>Social Worker | <br />  Animal Lover | <br /> Nature Lover <br /> </div>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#treelover</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#animallover</span>
          </div>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-6 mt-4 w-5/6">
            Invite
          </button>
        </div>
        <div class="rounded-lg overflow-hidden shadow-lg h-3/4 w-3/4 ">
          <div className='flex flex-wrap flex-col w-full h-2/5 '>
            <img class="w-1/2 h-full m-0" src={man2} alt="man1" />
            <div className='mx-2 mt-7  font-bold text-center'>Raghav Sharma <br /> Sambalpur <br /> </div>
            <div className='mx-1 mt-6 text-center text-sm whitespace-normal'>Social Worker | <br />  Animal Lover | <br /> </div>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#treelover</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#naturelover</span>
          </div>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-6 mt-4 w-5/6">
            Invite
          </button>
        </div>
        <div class="rounded-lg overflow-hidden shadow-lg h-3/4 w-3/4 ">
          <div className='flex flex-wrap flex-col w-full h-2/5 '>
            <img class="w-1/2 h-full m-0" src={lady1} alt="man1" />
            <div className='mx-2 mt-7  font-bold text-center'>Shraddha Pattanaik<br /> Deogarh <br /> </div>
            <div className='mx-1 mt-6 text-center text-sm whitespace-normal'>Social Worker | <br /> Nature Lover <br /> </div>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#socialworker</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#animallover</span>
          </div>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-6 mt-4 w-5/6">
            Invite
          </button>
        </div>
        <div class="rounded-lg overflow-hidden shadow-lg h-3/4 w-3/4 ">
          <div className='flex flex-wrap flex-col w-full h-2/5 '>
            <img class="w-1/2 h-full m-0" src={man3} alt="man1" />
            <div className='mx-2 mt-7  font-bold text-center'>Rajesh Sharad<br /> Balangir <br /> </div>
            <div className='mx-1 mt-6 text-center text-sm whitespace-normal'>Animal Lover | <br /> Nature Lover <br /> </div>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#naturelover</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#animallover</span>
          </div>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-6 mt-4 w-5/6">
            Invite
          </button>
        </div>
        <div class="rounded-lg overflow-hidden shadow-lg h-3/4 w-3/4 ">
          <div className='flex flex-wrap flex-col w-full h-2/5 '>
            <img class="w-1/2 h-full m-0" src={lady2} alt="man1" />
            <div className='mx-2 mt-7  font-bold text-center'>Priyanka Sharma<br /> Sonpur <br /> </div>
            <div className='mx-1 mt-6 text-center text-sm whitespace-normal'>Social Worker | <br />  Animal Lover | <br /> Nature Lover <br /> </div>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#socailworker</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#naturelover</span>
          </div>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-6 mt-4 w-5/6">
            Invite
          </button>
        </div>
        <div class="rounded-lg overflow-hidden shadow-lg h-3/4 w-3/4 ">
          <div className='flex flex-wrap flex-col w-full h-2/5 '>
            <img class="w-1/2 h-full m-0" src={man4} alt="man1" />
            <div className='mx-2 mt-7  font-bold text-center'>Soumya Jain<br /> Jajpur <br /> </div>
            <div className='mx-1 mt-6 text-center text-sm whitespace-normal'>Social Worker | <br />  Animal Lover | <br /> </div>
          </div>
          <div class="px-6 py-4">
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#treelover</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#animallover</span>
          </div>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-6 mt-4 w-5/6">
            Invite
          </button>
        </div>
      </div>


    </>
  );
};

export default Volunteer;
