import React from 'react';
import Card from '../Card/Card';

export default function SectionCard(props:any) {
   const {title, videos, size} = props;

   return (
    <section className='contentContainer'>
      
        <div className='contentHeader'>
        <h2>{title}</h2>
        </div>
        <div className='singleCategoryContainer'>
    
       {videos.map((video:any, idx:number) => {
        return  <Card key={video.id} idx={idx} imgUrl={video.imgUrl} title={video.title} size="medium"/>
       })}
       
       </div>
    </section>
  )
}
