import React from 'react'
import saplingsplanted from '../assets/saplingsplanted.png'
import temperature from '../assets/temperature.png'
import moisture from '../assets/moisture.png'
import soilph from '../assets/soilph.png'
import soilconductivity from '../assets/soilconductivity.png'
import Navbar from './Navbar';
import data from "../assets/Data.png"
import Cut2 from "../assets/Cut2.png"
import jaj1 from "../assets/jaj1.png"
import jaj2 from "../assets/jaj2.png"
import nay1 from "../assets/nay1.png"
import nay2 from "../assets/nay2.png"
<Navbar />

const Home2 = () => {
    return (
        <>
            <Navbar />
            <div className='ml-7 mt-10'>
                <h3 className='text-2xl font-bold ml-3 mb-3 '>Hello Shraddha!</h3>
                <div className='h-2/4 flex flex-wrap' >
                    <img src={saplingsplanted} alt="saplingsplanted" className='w-4/6 mr-3 h-full' />
                    <img src={temperature} alt="saplingsplanted" className='' />
                </div>
                <div className='h-2/4 flex flex-wrap' >
                    <img src={moisture} alt="saplingsplanted" className='w-2/5 mr-3 h-full' />
                    <img src={soilph} alt="saplingsplanted" className='' />
                    <img src={soilconductivity} alt="saplingsplanted" className='' />
                </div>
                <h3 className='text-2xl font-bold ml-3 mb-3 mt-9'>Weather Data Comparison</h3>
                <h5 className='text-2xl font-bold ml-3 mb-3 mt-3'>In Cuttack</h5>
                <div className="flex">
                    <img src={data} alt="" className='w-1/3' />
                    <img src={Cut2} alt="" className='w-1/3' />
                    <p className='self-center'>Here tha datas of both the consequetive datas are compared and observed. Conclusion is made that rain probability is maximum, so please be aware and  ready to take some serious preventive measures to protect your plants</p>
                </div>
                <h5 className='text-2xl font-bold ml-3 mb-3 mt-3'>In Nayagarh</h5>
                <div className="flex">
                    <img src={nay1} alt="" className='w-1/3' />
                    <img src={nay2} alt="" className='w-1/3' />
                    <p className='self-center'>Here tha datas of both the consequetive datas are compared and observed. Conclusion is made that rain probability is minimum, so minimum preventive measures are to be taken to protect your plants</p>
                </div>
                <h5 className='text-2xl font-bold ml-3 mb-3 mt-3'>In Jajpur</h5>
                <div className="flex">
                    <img src={jaj1} alt="" className='w-1/3' />
                    <img src={jaj2} alt="" className='w-1/3' />
                    <p className='self-center'>Here tha datas of both the consequetive datas are compared and observed. Conclusion is made that rain probability is minimum, so minimum preventive measures are to be taken to protect your plants</p>
                </div>


            </div>
        </>
    )
}

export default Home2