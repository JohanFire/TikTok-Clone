import React, {useState, useEffect, useRef} from 'react'
import { FlatList, Dimensions } from 'react-native'

import { VideoFeed } from "../Shared";
import { Video } from "../../api";
import { useAuth } from "../../hooks";
import { ENV } from "../../utils";

const {height} = Dimensions.get("window")
const video = new Video();

export function FollowingVideos() {
    const [videos, setVideos] = useState(null);
    const [indexStart, setIndexStart] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await video.get_following_videos(accessToken)
                setVideos(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    const onViewChangeRef = useRef(({ viewableItems }) => {
        setIndexStart(viewableItems[0].index);
    }); 

    if (!videos) return null;

    return (
        <FlatList
            data={videos}
            decelerationRate="fast"
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) =>
                <VideoFeed index={index} item={item} indexShow={indexStart} />
            }
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={height - ENV.TAB_MENU_HEIGHT}
            onViewableItemsChanged={onViewChangeRef.current}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            initialScrollIndex={indexStart}
            onScrollToIndexFailed={() => { }}
        />
    )
}