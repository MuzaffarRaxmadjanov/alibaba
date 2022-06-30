import React, { useState } from 'react';
import c from './Banner.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';
import { useEffect } from 'react';

const Banner = () => {
  const [imageCount, setImageCount] = useState(0);
  const imageCon = useRef();
  const images = [
    "https://s.alicdn.com/@img/imgextra/i2/O1CN01lLjvQB1qsrifzUGRs_!!6000000005552-2-tps-990-400.png",
    "https://s.alicdn.com/@img/imgextra/i3/O1CN01CcrZeI1hkmAVDkJ2Q_!!6000000004316-2-tps-990-400.png",
    "https://s.alicdn.com/@img/imgextra/i2/O1CN01YZhuhc1qIE27EzvwI_!!6000000005472-2-tps-990-400.png",
    "https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png",
    "https://s.alicdn.com/@img/imgextra/i2/O1CN01LLRWqr1GR5Wwiemk0_!!6000000000618-0-tps-990-400.jpg"
  ]

  useEffect(() => {
    imageCon.current.scrollLeft = imageCount * imageCon.current.offsetWidth
  }, [imageCount])

  useEffect(() => {
   setTimeout(() => {
        if(imageCount < images.length){
          setImageCount(imageCount => imageCount + 1)
        }
        else{
          setImageCount(0)
        }
      }, 50000)
  }, [imageCount, images.length])


  // console.log(imageCount)
  return (
    <div className={c.banner}>
      <button className={c.left_btn} onClick={() => {
       if (imageCount === 0) {
        setImageCount(images.length - 1)
        }
        else {
            setImageCount(imageCount => imageCount - 1)
        }

      }}><FiChevronLeft/></button>
      <div ref={imageCon} className={c.image__coontainer}>
      {
        images.map((item,inx) => 
          <img key={inx} src={item} alt=""/>  
        )
      }
     
      </div>
      <button className={c.right_btn} onClick={() => {
        if (imageCount === images.length - 1) {
          setImageCount(0)
          
      }
      else {
          setImageCount(imageCount => imageCount + 1)
      }        
      }}><FiChevronRight/></button>
       <div className={c.dots}>
      {
        images.map((dot, index) => 
          <div key={index} onClick={() => setImageCount(index)} style={index === imageCount ? {background: "dodgerblue", transform: "scale(1.3)"} : null} className={c.point}></div>  
        )
      }
      </div>
    </div>
  )
}

export default Banner