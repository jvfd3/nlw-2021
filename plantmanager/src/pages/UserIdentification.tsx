import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import { Button } from '../Components/Button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    
    const navigation = useNavigation();

    
    function handleSubmit(){
        navigation.navigate('Confirmation');
    };

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name)
    }
    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    return(
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.form} >
                    <View style={styles.header} >
                        <Text style={styles.title} >
                            Como podemos {'\n'}
                            chamar você?
                        </Text>
                        <Text style={styles.emoji} >
                            {isFilled ? '😎':'💠'} 
                        </Text>
                    </View>
                    <TextInput
                        style={[
                            styles.input,
                            {borderColor: 'white'},
                            (isFocused || isFilled) &&
                            {borderColor: colors.green}
                        ]}
                        placeholder="Digite um nome"
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                    />
                    <View style={styles.footer} >
                        <Button title='Confirmar' onPress={handleSubmit} />
                    </View>
                </View>
            </KeyboardAvoidingView>
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
    header: {
        alignItems: 'center',
    },
    emoji: {
        fontSize:44,
        color: 'white',
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
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,

    },
}); 