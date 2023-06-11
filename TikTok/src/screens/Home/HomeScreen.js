import React, { useState } from 'react'
import { View } from 'react-native'

import { Header, ForYouVideos, FollowingVideos } from "../../components/Home";
import { ENV } from "../../utils";

export function HomeScreen() {
    const [typeVideos, setTypeVideos] = useState(ENV.TYPE_VIDEO.FOR_YOU)
    return (
        <>
            <Header typeVideos={typeVideos} setTypeVideos={setTypeVideos} />

            {typeVideos === ENV.TYPE_VIDEO.FOR_YOU
                ? (<ForYouVideos />)
                : (<FollowingVideos />)
            }
        </>
    )
}