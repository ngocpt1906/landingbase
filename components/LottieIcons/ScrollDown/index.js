import React from 'react';
import Lottie from 'react-lottie';
import animationData from './data.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const ScrollDown = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={84}
        width={40}
      />
    </div>
  );
}

export default ScrollDown;