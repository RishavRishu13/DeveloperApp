import React from 'react'
import Lottie from 'react-lottie'
import * as landingTwo from './landing2.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingTwo.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const LandingTwo = () => {
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
            />
        </div>
    )
}

export default LandingTwo
