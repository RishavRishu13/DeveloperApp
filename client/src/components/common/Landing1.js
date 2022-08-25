import React from 'react'
import Lottie from 'react-lottie'
import * as landingOne from './landing1.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingOne.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const LandingOne = () => {
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={650}
                width={650}
            />
        </div>
    )
}

export default LandingOne
