import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'

const Images = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Images</Text>

        <View>
            <Image source={require('../assets/topVector.png')} style={styles.cardImage}/>
        </View>
        <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Post Title</Text>
            <Text style={styles.postDesc}>Post Desciption</Text>
        </View>
    </View>
  )
}


export default Images

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: 120,
    },
    postContainer: {
        marginTop: 10,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EF5354'
    },
    postDesc: {
        fontSize: 14,
        color: '#000'
    },
})