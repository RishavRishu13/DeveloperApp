import React from 'react'
import Lottie from 'react-lottie'
import * as profileUploading from './profileUploading.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: profileUploading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};

const ProfileUplaoding = () => {
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={500}
                width={500}
            />
        </div>
    )
}

export default ProfileUplaoding
