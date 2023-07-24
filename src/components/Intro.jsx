import React, {useRef, useState} from 'react';
import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';
import { ImPlay2 } from 'react-icons/im';
import vv from '../assets/meal.mp4';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();
    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);
        if(playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }
  return (
    <div className='relative'>
        <video 
        src={vv}  
        type='video/mp4' 
        loop 
        controls={false} 
        muted 
        ref={vidRef}
        />
        <div className='absolute inset-0 flex justify-center items-center'>
            <div onClick={handleVideo} className='w-[100px] h-[100px] rounded-[50%] cursor-pointer flex justify-center items-center'>
                {playVideo ? <BsPauseCircle color='#fff' size={300}/> : <BsPlayCircle color='#fff' size={300}/>} 
            </div>
        </div>
    </div>
  )
}

export default Intro