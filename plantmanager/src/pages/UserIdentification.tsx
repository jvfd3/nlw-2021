import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){
    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.form} >
                <Text style={styles.title} >
                    Como podemos {'\n'}
                    chamar você?
                </Text>
                <Text style={styles.emoji} >
                    💠
                </Text>
                <TextInput style={styles.input}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#000',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 54,
        justifyContent: 'center',
    },
    emoji: {
        fontSize:44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize:24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
}); 