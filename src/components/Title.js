import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const Title = props => {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 18, 
        paddingBottom: 18
    },
    title: {
        fontFamily: 'Ubuntu-Bold', 
        fontSize: 48, 
        color: 'white', 
        textAlign: 'center'
    },
    subTitle: {
        fontFamily: 'Ubuntu-Regular', 
        fontSize: 14, 
        color: 'white', 
        textAlign: 'center'
    }
})

export default Title