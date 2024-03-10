import React, { useEffect, useState } from 'react'
import { Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SERVER_URL } from './constants/AppInfos'

import MainScreen from './screens/Main'
import IntroScreen from './screens/Intro'
import WarnScreen from './screens/Warn'
import Layout from './components/Layout'

const Stack = createStackNavigator()

const MainNavigator = ({ liveLink }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} initialParams={{ urle: liveLink }}/>
        </Stack.Navigator>
    )
}

export default function App() {
    const [alreadyWelcomed, setAlreadyWelcomed] = useState(false)
    const [warned, setWarned] = useState(null)
    const [liveLink, setLiveLink] = useState(SERVER_URL)

    const checkAndSetAlreadyWelcomed = async () => {
        try {
            const etatWelcome = await AsyncStorage.getItem('alreadyWelcomed')
            setAlreadyWelcomed(etatWelcome === 'true')
        } catch (e) {
            console.error(e)
        }
    }

    const checkWelcomed = async () => {
        try {
            await AsyncStorage.setItem('alreadyWelcomed', 'true')
            setAlreadyWelcomed(true)
        } catch (e) {
            console.error(e)
        }
    }

    const checkAndSetWarned = async () => {
        try {
            const isWarned = await AsyncStorage.getItem('warned')
            setWarned(isWarned)
        } catch (e) {
            console.error(e)
        }
    }

    const checkWarned = async (val) => {
        try {
            await AsyncStorage.setItem('warned', val.toString())
            setWarned(val)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        checkAndSetAlreadyWelcomed()
        checkAndSetWarned()

        const handleInitialUrl = async () => {
            const initialUrl = await Linking.getInitialURL()
            if (initialUrl) {
                setLiveLink(initialUrl)
            }
        }

        handleInitialUrl()
    }, [])

    const renderContent = () => {
        if (!alreadyWelcomed) {
            return <IntroScreen onFinish={checkWelcomed} />
        }
        if (warned === null) {
            return <WarnScreen onFinish={(val) => checkWarned(val)} />
        }
        return (
            <NavigationContainer>
                <MainNavigator liveLink={liveLink} />
            </NavigationContainer>
        )
    }

    return <Layout>{renderContent()}</Layout>
}