import React, { useState } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

import { Header } from "../../components/Home";
import { ENV } from "../../utils";

export function HomeScreen() {
    const [typeVideos, setTypeVideos] = useState(ENV.TYPE_VIDEO.FOR_YOU)
    return (
        <>
            <Header typeVideos={typeVideos} setTypeVideos={setTypeVideos} />


            {typeVideos === ENV.TYPE_VIDEO.FOLLOWING && <Text>FOLLOWING</Text>}
            {typeVideos === ENV.TYPE_VIDEO.FOR_YOU  && <Text>FOR_YOU</Text>}
        </>
    )
}