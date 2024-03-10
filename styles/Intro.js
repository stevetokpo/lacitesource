import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    finalScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    animatableButton: {
        width: 220,
        height: 70,
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        shadowColor: "#fff",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 0.75,
        shadowRadius: 1,
        elevation: 8,
    },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Ubuntu-Bold',
    },
})