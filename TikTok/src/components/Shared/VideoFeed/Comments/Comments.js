import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";
import { size } from "lodash";

import { nFormatter } from "../../../../utils";
import { useTheme, useAuth } from "../../../../hooks";
import { Header } from "./Header";
import { Comment } from "../../../../api";

const { height } = Dimensions.get("screen");

const commentController = new Comment();

export function Comments(props) {
    const { idUser, idVideo } = props;
    const sheet = useRef();
    const styles = styled();
    const {accessToken} = useAuth();
    const [Comments, setComments] = useState(null)

    const open_sheet = () => sheet.current.open();
    const close_sheet = () => sheet.current.close();

    useEffect(() => {
        (async () => {
            try {
                const response = await commentController.getCommentsVideo(accessToken, idVideo)
                console.log(response);
                setComments(response);
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])


    return (
        <>
            <View style={styles.content} >
                <Icon
                    type='material-community'
                    name='comment-processing'
                    size={40}
                    onPress={open_sheet}
                />

                <Text>{nFormatter(99)}</Text>
            </View>

            <RBSheet
                ref={sheet}
                height={height - 200}
                openDuration={200}
                keyboardAvoidingViewEnabled={false}
                customStyles={{
                    container: styles.rb_sheet_container,
                }}
            >
                <Header 
                onClose={close_sheet} 
                commentCounter={size(Comments)}
                />
            </RBSheet>
        </>
    )
}

const styled = () => {
    const { theme } = useTheme();
    return (
        StyleSheet.create({
            content: {
                alignItems: "center",
                marginBottom: 20,
            },
            rb_sheet_container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: theme.Default.background,
            }
        })
    )
}