import React, { useRef, useState } from 'react'
import { BackHandler, View } from 'react-native'
import { WebView } from 'react-native-webview'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from '../styles/Main'
import { THEME_COLORS } from '../constants/AppInfos'

const Main = ({ route }) => {
    const { urle } = route.params
    const webViewRef = useRef(null)
    const [firsttime, setFirsttime] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const handleBackButton = () => {
        if (webViewRef.current) {
            webViewRef.current.goBack()
            return true
        }
        return false
    }

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton)

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
        }
    }, [])

    return (
        <View style={styles.container}>
            <WebView
                ref={webViewRef}
                source={{ uri: urle }}
                style={styles.webview}
                onLoadStart={() => setIsLoading(true)}
                onLoad={() => setIsLoading(false)}
                onNavigationStateChange={(navState) => {
                    if (!navState.canGoBack) {
                        BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
                    } else {
                        BackHandler.addEventListener('hardwareBackPress', handleBackButton)
                    }
                }}
            />
            {isLoading && firsttime === 0 && (
                <>
                    {setFirsttime(1)}
                    <View style={styles.loadingOverlay}>
                        <FontAwesome name="spinner" size={32} color={THEME_COLORS.c600} />
                    </View>
                </>
            )}
        </View>
    )
}
export default Main