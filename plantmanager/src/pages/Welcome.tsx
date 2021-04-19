import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Button } from '../Components/Button';
import colors from '../styles/colors';
export function Welcome () {

    const [visible, setVisible] = React.useState(false);

/*     function handleVisibility(){
        setVisible(!visible);
    } */


    return(
        <SafeAreaView style={[styles.view1,]}>
            <Text style={[styles.title, styles.whiteText]}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>
            {   visible &&
                <Image source={wateringImg} style={[styles.image,]} />
            }
            <Text style={[styles.subtitle, styles.whiteText]}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <Button title='>' /* onPress={handleVisibility} */ />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    view1: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10,
    },
    image: {
        width: 292,
        height: 284,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    },
    whiteText: {
      color: 'white',
    },

  });