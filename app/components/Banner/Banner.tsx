'use client';
import React from 'react'
import Image from 'next/image';
import PlayIcon from '../../../public/play.png';
import { Carousel } from 'antd';
import Img1 from '../../../public/OIG1.jpg';
import Img2 from '../../../public/OIG3.jpg';

export default function Banner(props:any) {
  const {title, subTitle, imageUrl} = props;

  return (
    <div className='relative top-0 left-0'>
    <Carousel autoplay autoplaySpeed={4000}>
    <div className='carouselDiv'>
    <Image src={Img1} width={0} height={0} alt="play" className='responsiveImg' />
    </div>
    <div>
    <Image src={Img2} width={0} height={0} alt="play" className='responsiveImg'/>
    </div>
   
  </Carousel>
   {/* <div className='carouselDiv'>
   <Image src={Img2} width={0} height={0} alt="play" className='responsiveImg'/>
   </div> */}
    <div className='bannerOverlay gap-2'>
    <h1 className='text-red text-6xl'>Nextflix</h1>
        <h3 className='text-3xl'>{title}</h3>
        <h3 className='text-2xl'>{subTitle}</h3>
        <button className='flex items-center justify-center gap-1 w-20 p-2 '>
          <Image src={PlayIcon} width={50} height={50} alt="play" />
          Play</button>
    </div>

    </div>
  )
}
