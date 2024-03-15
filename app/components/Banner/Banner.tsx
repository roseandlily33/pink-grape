'use client';
import React from 'react'
import Image from 'next/image';
import PlayIcon from '../../../public/play.png';

export default function Banner(props:any) {
  const {title, subTitle, imageUrl} = props;

  return (
    <div className='mb-10 border h-30'>
        <h2 className='text-red'>Nextflix</h2>
        <h3>{title}</h3>
        <h3>{subTitle}</h3>
        <button className='flex items-center justify-center gap-1 w-20 p-2 '>
          <Image src={PlayIcon} width={50} height={50} alt="play" />
          Play</button>
    </div>
  )
}
