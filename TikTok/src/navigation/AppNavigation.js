// Navigation for Logged Users

import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text, Button } from "react-native-elements";

export function AppNavigation() {
    return (
        <SafeAreaView>
            <Text>AppNavigation</Text>
            <Button title="Cerrar sesión"/>
        </SafeAreaView>
    )
}