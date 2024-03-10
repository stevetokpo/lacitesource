import React from 'react'
import { Text, TouchableOpacity, BackHandler } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

import globalstyles from '../styles/Global'
import styles from '../styles/Warn'
import { APP_NAME, THEME_COLORS } from '../constants/AppInfos'

const Warn = ({ onFinish }) => {
    return (
        <Animatable.View animation="fadeIn" duration={800} style={styles.container}>
            <Animatable.Text animation="fadeInDown" duration={800} style={styles.title}>
                <Ionicons name="warning" size={24} color={THEME_COLORS.c600} />
                    AVERTISSEMENT
                <Ionicons name="warning" size={24} color={THEME_COLORS.c600} />
            </Animatable.Text>
            <Animatable.Text animation="fadeInDown" duration={1000} style={styles.subtitle}>
                Bienvenue sur {APP_NAME}!{'\n'}
                Acceptez-vous les conditions suivantes pour continuer: <Text style={globalstyles.textprimary}>contenu explicite</Text> et <Text style={globalstyles.textprimary}>consensuel</Text>, <Text style={globalstyles.textprimary}>confidentialité</Text> et <Text style={globalstyles.textprimary}>sécurité</Text>?
            </Animatable.Text>
            <Animatable.View animation="fadeInUp" duration={1200} style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.noButton]}
                    onPress={() => BackHandler.exitApp()}
                >
                    <Ionicons name="close-circle-outline" size={24} color="#fff" />
                    <Text style={styles.buttonText}>NON</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.yesButton]}
                    onPress={() => onFinish(1)}
                >
                    <Ionicons name="checkmark-circle-outline" size={24} color="#fff" />
                    <Text style={styles.buttonText}>OUI</Text>
                </TouchableOpacity>
            </Animatable.View>
        </Animatable.View>
    )
}

export default Warn