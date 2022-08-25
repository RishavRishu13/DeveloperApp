import React from 'react'
import Lottie from 'react-lottie'
import * as edu from './edu.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: edu.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const Edu = () => {
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

export default Edu
