import React from 'react'
import Lottie from 'react-lottie'
import * as github from './github.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: github.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};


const Repos = () => {
    return (
        <div className>
            <Lottie
                options={defaultOptions}
                height={120}
                width={120}
            />
        </div>
    )
}

export default Repos
