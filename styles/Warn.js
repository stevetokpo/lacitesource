import { StyleSheet } from 'react-native'

import { THEME_COLORS } from '../constants/AppInfos'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Ubuntu-Bold',
        color: '#fff',
        marginBottom: 15,
        textAlign: 'center',
        
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 32,
        fontFamily: 'Ubuntu-Regular'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        margin: 10,
        shadowColor: "#fff",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 0.75,
        shadowRadius: 1,
        elevation: 8,
    },
    yesButton: {
        backgroundColor: THEME_COLORS.c500,
    },
    noButton: {
        backgroundColor: '#222',
    },
    buttonText: {
        fontSize: 25,
        marginLeft: 8,
        fontFamily: 'Ubuntu-Bold',
        color: '#fff'
    }
})