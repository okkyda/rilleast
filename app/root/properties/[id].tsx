import {View,Text} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Properties = () => {

    const {id} = useLocalSearchParams();
    return (
        <View>
            <Text>Sign in</Text>
        </View>
    )
}

export default Properties;