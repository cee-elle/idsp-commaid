import React from 'react'
import Lottie from 'react-lottie';
import animationData from './search-processing.json';

const MyLottie = () =>{
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return <div>
        <Lottie options={defaultOptions}
                height={200}
                width={200}/>
                </div>
    }
  
export default MyLottie;