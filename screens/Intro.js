import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Video } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles/Intro'
import { THEME_COLORS } from '../constants/AppInfos'

const IntroScreen = ({ onFinish }) => {
    const [videoEnded, setVideoEnded] = useState(false)

    const handleVideoEnd = () => {
        setVideoEnded(true)
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={!videoEnded} />
            {!videoEnded ? (
                <Video
                    source={require('../assets/videos/presentation.mp4')}
                    style={styles.backgroundVideo}
                    resizeMode="cover"
                    shouldPlay
                    isLooping={false}
                    onPlaybackStatusUpdate={(status) => status.didJustFinish && handleVideoEnd()}
                    useNativeControls={false}
                />
            ) : (
                <View style={styles.finalScreen}>
                    <Animatable.View
                        animation="bounce"
                        easing="ease-in-out"
                        iterationCount="infinite"
                        style={styles.animatableButton}
                    >
                        <TouchableOpacity style={styles.button} onPress={onFinish}>
                            <LinearGradient
                                colors={[THEME_COLORS.c600, THEME_COLORS.c800]}
                                style={styles.gradient}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <Text style={styles.buttonText}>COMMENCER</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            )}
        </View>
    )
}

export default IntroScreen