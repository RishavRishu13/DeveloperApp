import React from 'react'
import Lottie from 'react-lottie'
import * as uploading from './uploading.json'
import './Uploading.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: uploading.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Uploading = () => {
    return (
        <div className="uploading">
            <Lottie
                options={defaultOptions}
                height={120}
                width={120}
            />
        </div>
    )
}

export default Uploading
