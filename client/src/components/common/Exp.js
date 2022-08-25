import React from 'react'
import Lottie from 'react-lottie'
import * as exp from './exp.json'
import './Loading.css'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: exp.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const Exp = () => {
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

export default Exp
