// Navigation for Logged Users

import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text, Button } from "react-native-elements";

import { useAuth } from "../hooks";

export function AppNavigation() {
    const { logout } = useAuth();

    return (
        <SafeAreaView>
            <Text>AppNavigation</Text>
            <Button
                title="Cerrar sesión"
                onPress={logout}
            />
        </SafeAreaView>
    )
}