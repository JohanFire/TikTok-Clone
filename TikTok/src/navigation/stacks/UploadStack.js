import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UploadScreen, PublishVideoScreen } from "../../screens/Upload";
import { screen } from "../../utils";

const Stack = createNativeStackNavigator()

export function UploadStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.upload.upload}
                component={UploadScreen}
                options={{ title: "" }}
            />
            <Stack.Screen
                name={screen.upload.publishVideo}
                component={PublishVideoScreen}
                options={{ title: "Publicar" }}
            />
        </Stack.Navigator>
    )
}