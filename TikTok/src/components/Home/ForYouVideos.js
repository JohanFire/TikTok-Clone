import React, { useState, useEffect } from 'react'
import { FlatList, Dimensions, View } from 'react-native'
import { Text } from 'react-native-elements'

import { Video } from "../../api";
import { useAuth } from "../../hooks";
import { ENV } from "../../utils";

const videoController = new Video();
const { height } = Dimensions.get("window")

export function ForYouVideos() {
    const [videos, setVideos] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        if (accessToken) {
            (async () => {
                try {
                    const response = await videoController.get_all_videos(accessToken);
                    setVideos(response);
                } catch (error) {
                    console.error(error);
                }
            })()
        }
    }, [])

    if (!videos) return null;

    return (
        <FlatList
            data={videos}
            decelerationRate="fast"
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View index={index} style={{ height: height - ENV.TAB_MENU_HEIGHT }} >
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.description}</Text>
                </View>
            )}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={height - ENV.TAB_MENU_HEIGHT}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50}}
            onScrollToIndexFailed={() => {}}
        />
    )
}