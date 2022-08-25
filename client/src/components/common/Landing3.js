import React from 'react'
import Lottie from 'react-lottie'
import * as landingThree from './landing3.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingThree.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const LandingThree = () => {
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )
}

export default LandingThree
