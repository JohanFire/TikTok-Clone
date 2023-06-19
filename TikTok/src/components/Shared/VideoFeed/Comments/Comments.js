import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions, FlatList } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";
import { size } from "lodash";

import { nFormatter } from "../../../../utils";
import { useTheme, useAuth } from "../../../../hooks";
import { Header } from "./Header";
import { Comment as CommentController } from "../../../../api";
import { Comment } from "./Comment";

const { height } = Dimensions.get("screen");

const commentController = new CommentController();

export function Comments(props) {
    const { idUser, idVideo } = props;
    const sheet = useRef();
    const styles = styled();
    const {accessToken} = useAuth();
    const [comments, setComments] = useState(null)
    const [reloadComment, setReloadComment] = useState(true);

    const totalComments = size(comments)

    const open_sheet = () => sheet.current.open();
    const close_sheet = () => sheet.current.close();

    useEffect(() => {
        (async () => {
            try {
                const response = await commentController.getCommentsVideo(accessToken, idVideo)
                // console.log(response);
                setComments(response);
            } catch (error) {
                console.error(error)
            }
        })()
    }, [reloadComment])

    const on_reload_comments = () => setReloadComment((prevState) => !prevState);

    return (
        <>
            <View style={styles.content} >
                <Icon
                    type='material-community'
                    name='comment-processing'
                    size={40}
                    onPress={open_sheet}
                />

                <Text>{nFormatter(totalComments)}</Text>
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
                commentCounter={totalComments}
                />
                <FlatList 
                    data={comments}
                    renderItem={({item}) => (
                        <Comment 
                            comment={item}
                            onReloadComments={on_reload_comments}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    style={styles.comments__list}
                    ListEmptyComponent={
                        <Text
                            style={styles.no__comment__text}
                        >Sé el primero en comentar</Text>
                    }
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
            },
            comments__list: {
                marginBottom: 80,
            },
            no__comment__text: {
                textAlign: 'center',
                marginTop: 20,
                opacity: 0.6,
            },
        })
    )
}