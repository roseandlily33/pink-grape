'use client';
import React from 'react'
import Image from 'next/image';
import PlayIcon from '../../../public/play.png';
import { Carousel } from 'antd';
import Img1 from '../../../public/OIG1.jpg';
import Img2 from '../../../public/OIG3.jpg';
import Navbar from '../Navbar/navbar';

export default function Banner(props:any) {
  const {title, subTitle, imageUrl} = props;

  return (
    <div className='mb-10 border h-30'>
    <Navbar />
    {/* <Carousel autoplay autoplaySpeed={4000}>
    <div className='carouselDiv'>
    <Image src={Img1} width={0} height={0} alt="play" className='responsiveImg' />
    </div>
    <div>
    <Image src={Img2} width={0} height={0} alt="play" className='responsiveImg'/>
    </div>
   
  </Carousel> */}
   <div className='carouselDiv'>
   <Image src={Img2} width={0} height={0} alt="play" className='responsiveImg'/>
   </div>
    <div className='bannerOverlay'>
    <h2 className='text-red'>Nextflix</h2>
        <h3>{title}</h3>
        <h3>{subTitle}</h3>
        <button className='flex items-center justify-center gap-1 w-20 p-2 '>
          <Image src={PlayIcon} width={50} height={50} alt="play" />
          Play</button>
    </div>

    </div>
  )
}
