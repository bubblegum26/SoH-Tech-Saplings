import React from 'react'
import Navbar from './Navbar';
import cuttack1 from '../assets/cuttack1.jpg'
import cuttack2 from '../assets/cuttack2.png'
import jajpur1 from '../assets/jajpur1.jpg'
import jajpur2 from '../assets/jajpur2.jpg'
import nayagarh1 from '../assets/nayagarh1.jpg'
import nayagarh2 from '../assets/nayagarh2.jpg'
import gummosis from '../assets/gummosis.jpg'
import citrusgreening from '../assets/citrusgreening.jpg'
import citrus from '../assets/citrus.jpg'
import shareVideo from '../assets/share.mp4'
import { RemoveScrollBar } from 'react-remove-scroll-bar';


const Dashboard = () => {
    return (
        <>

            <Navbar />
            <div className='mt-5 flex flex-wrap text-center justify-center'>
                <h1 className='text-center mr-5 self-center text-lg font-bold'> Request for Drone Surveillance </h1>
                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                    Send Request
                </button>
            </div>
            <div className='mt-7 flex flex-wrap m-10'>
                <h1 className='text-center mr-5 self-center text-lg font-bold mb-10'> Images taken from drone </h1>
                <div class="flex flex-col bg-white m-auto p-auto overflow-x-auto scrollbar-hide">
                    <div
                        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
                    >
                        <div
                            class="flex flex-nowrap "
                        >
                            <div class="inline-block px-3">
                                <div class="w-64 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img class="rounded-t-lg h-4/5" src={jajpur1} alt="" />
                                    <h5 class="mt-1 mx-1 text-sm  tracking-tight text-gray-900 dark:text-white text-center">Image taken at Kotuan, Jajpur</h5>
                                </div>
                            </div>
                            <div class="inline-block px-3">
                                <div class="w-64 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img class="rounded-t-lg h-4/5" src={cuttack1} alt="" />
                                    <h5 class="mt-1 mx-1 text-sm  tracking-tight text-gray-900 dark:text-white text-center">Image taken at Pradhan Sahi, Cuttack</h5>
                                </div>
                            </div>
                            <div class="inline-block px-3">
                                <div class="w-64 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img class="rounded-t-lg h-4/5" src={nayagarh1} alt="" />
                                    <h5 class="mt-1 mx-1 text-sm  tracking-tight text-gray-900 dark:text-white text-center">Image taken at Kankanamendhi, Nayagarh</h5>
                                </div>
                            </div>
                            <div class="inline-block px-3">
                                <div class="w-64 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img class="rounded-t-lg h-4/5" src={cuttack2} alt="" />
                                    <h5 class="mt-1 mx-1 text-sm  tracking-tight text-gray-900 dark:text-white text-center">Image taken at Baxi market, Cuttack</h5>
                                </div>
                            </div>
                            <div class="inline-block px-3">
                                <div class="w-64 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img class="rounded-t-lg h-4/5" src={jajpur2} alt="" />
                                    <h5 class="mt-1 mx-1 text-sm  tracking-tight text-gray-900 dark:text-white text-center">Image taken at Bari, Jajpur</h5>
                                </div>
                            </div>
                            <div class="inline-block px-3">
                                <div class="w-64 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img class="rounded-t-lg h-4/5" src={nayagarh2} alt="" />
                                    <h5 class="mt-1 mx-1 text-sm  tracking-tight text-gray-900 dark:text-white text-center">Image taken at Barasahi, Nayagarh</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-7 m-10'>
                <h1 className=' mr-5 self-center text-lg font-bold mb-5'> Plant Disease detected </h1>
                <div className="flex">

                    <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-7">
                        <a href="#">
                            <img class="rounded-t-lg w-full" src={citrus} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Citrus Disease</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rough surface, and become cracked and fissured.The scabs are grey or pinkish at first.</p>
                            <a href="https://www.thisoldhouse.com/gardening/21124673/how-to-treat-disease-with-citrus-trees" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 self-center">
                                Solution
                            </a>
                        </div>
                    </div>
                    <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-7">
                        <a href="#">
                            <img class="rounded-t-lg w-full" src={citrusgreening} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Citrus Greening</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rough surface, and become cracked and fissured.The scabs are grey or pinkish at first.</p>
                            <a href="https://www.floridacitrus.org/newsroom/citrus-411/citrus-greening/potential-citrus-greening-solutions/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 self-center">
                                Solution
                            </a>
                        </div>
                    </div>
                    <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-7">
                        <a href="#">
                            <img class="rounded-t-lg w-full" src={gummosis} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gummosis</h5>
                            </a>
                            <p class="mb-12 font-normal text-gray-700 dark:text-gray-400">Sap oozing from small cracks in the infected bark.</p>
                            <a href="https://www.gardeningknowhow.com/edible/fruits/fegen/what-is-gummosis.htm#:~:text=If%20you%20want%20to%20know,the%20bark%20trimming%20if%20necessary." class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 self-center">
                                Solution
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-7 m-10 '>
                <h1 className=' mr-5 text-lg font-bold mb-5 '> Drone Shot Footage</h1>
                <div className='flex justify-center '>
                    <video
                        src={shareVideo}
                        type="video/mp4"
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className="flex w-4/5 h-3/4 rounded-lg"
                    />
                </div>
            </div>

        </>
    )
}

export default Dashboard