import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import ReactPlayer from 'react-player'
import PhoneInput from 'react-phone-number-input'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Banner = () => {
    const [value, setValue] = useState()
    return (
        <div style={{ position: "relative" }} >
            <Carousel
                arrows={false}
                removeArrowOnDeviceType
                keyBoardControl={false}
                autoPlay={true}
                autoPlaySpeed={6000}
                infinite={true}
                responsive={responsive}>
                <div  >
                    <ReactPlayer width={"100%"} muted={true} playing={true} height={560} url="https://d118vismjsp9sl.cloudfront.net/web2.0/video/hero-video-1.webm" />
                </div>
                <div>
                    <ReactPlayer width={'100%'} muted={true} playing={true} height={560} url="https://d118vismjsp9sl.cloudfront.net/web2.0/video/hero-video-2.webm" />
                </div>
                <div>
                    <ReactPlayer width={'100%'} muted={true} playing={true} height={560} url="https://d118vismjsp9sl.cloudfront.net/web2.0/video/hero-video-3.webm" />
                </div>
                <div> <ReactPlayer width={'100%'} muted={true} playing={true} height={560} url="https://d118vismjsp9sl.cloudfront.net/web2.0/video/hero-video-4.webm" /></div>
            </Carousel>

            <div style={{ position: "absolute", top: 0, right: 0, width: 500, backgroundColor: "black", height: 580, borderBottomLeftRadius: 20 }}>
                <div className='p-10' >
                    <p className='text-white text-center my-4' >বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে</p>
                    <div className='my-4'>
                        <PhoneInput
                            international={false}
                            defaultCountry="BN"
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} />
                    </div>
                    <button className='bg-green-500 text-white w-full py-3 font-bold my-4 rounded' >সাইন-আপ </button>
                    <div className='flex items-center gap-5 my-5' >
                        <div style={{ border: '.05px solid white', width: 400, height: 0 }} ></div>
                        <p className='text-white' >অথবা,</p>
                        <div style={{ border: '.05px solid white', width: 400, height: 0 }} ></div>
                    </div>
                    <input className='w-full my-5 p-3 rounded border-green-500' placeholder='ট্র্যাকিং আইডি দিন ' type="text" />
                </div>

            </div>


            <div className='container mx-auto mt-10 px-5'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    <div className='flex items-center' >
                        <p className='text-gray-400' >TOP ENTERPRISES</p>
                        <img className='w-20 sm:w-20 md:w-40 lg:w-40 grayscale hover:grayscale-0' src={require('../../assets/image/bata-color.png')} alt="" />
                        <img className='w-20 sm:w-20 md:w-40 lg:w-40 grayscale hover:grayscale-0' src={require('../../assets/image/rangs-group-color.png')} alt="" />
                        <img className='w-20 sm:w-20 md:w-40 lg:w-40 grayscale hover:grayscale-0' src={require('../../assets/image/lotto-color.png')} alt="" />
                    </div>
                    <div className='flex items-center gap-14' >
                        <p className='text-gray-400' >TOP SMES</p>
                        <img className='w-10 sm:w-10 md:w-24 grayscale hover:grayscale-0' src={require('../../assets/image/daraz-color.png')} alt="" />
                        <img className='w-10 sm:w-10 md:w-24 grayscale hover:grayscale-0' src={require('../../assets/image/ajkerdeal-color.png')} alt="" />
                        <img className='w-10 sm:w-10 md:w-24 grayscale hover:grayscale-0' src={require('../../assets/image//othoba-color.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
