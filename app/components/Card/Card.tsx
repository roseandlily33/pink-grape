'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import NotFound from '../../../public/ImgNotFound.jpg';
import {motion} from 'framer-motion';
import cls from 'classnames'

export default function Card(props:any) {
const {imgUrl, size, idx, id, title} = props;

const [errImg, setErrImg] = useState(imgUrl);
let width;
let height;
const handleImgErr = () => {
    setErrImg(NotFound)
}
const scale = idx === 0 ? {scaleY: 1.1} : {scale: 1.2}
if(size === 'medium'){
    width = 350;
    height = 550;
}

  return (
    <div className='container' key={id}>
        <motion.div whileHover={{...scale}}  className={cls('imgMotionWrapper', size)}>
        <Image src={imgUrl} width={width} height={height} onError={handleImgErr} alt={title} className="cardImg"/>
        </motion.div>
    </div>
  )
}
