import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'

const AboutScreen = props => {
    const back = () => {
        props.navigation.goBack()
    }
    const openUrl = url => () => {
        Linking.openURL(url)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>CalisTimer</Text>
            <Text style={styles.description}>Esse aplicativo foi construido como parte de um exercício de aprendizado da stack React-Native</Text>
            <TouchableOpacity onPress={openUrl('https://github.com/guilepaul')}>
                <Image source={require('../../assets/Group.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={back}>
                <Image source={require('../../assets/left-arrow.png')} /> 
            </TouchableOpacity>
        </View>
    )
}

AboutScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#D6304A',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    logo: { fontFamily: 'Ubuntu-Bold', 
    fontSize: 48, 
    textAlign: 'center', 
    color: 'white', 
    marginTop: 35, 
    marginBottom: 35 },
    description: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        color: 'white',
        margin: 20,
        textAlign: 'center'
    }
})

export default AboutScreen