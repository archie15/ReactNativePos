import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles'

const Flatcards = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Flat Cards</Text>
        <View style={styles.cardContainer}>
            <View style={[styles.cardItems, styles.cardOne]}><Text style={styles.cardItem}>Card One</Text></View>
            <View style={[styles.cardItems, styles.cardTwo]}><Text style={styles.cardItem}>Card Two</Text></View>
            <View style={[styles.cardItems, styles.cardThree]}><Text style={styles.cardItem}>Card Three</Text></View>
            <View style={[styles.cardItems, styles.cardFour]}><Text style={styles.cardItem}>Card Four</Text></View>
        </View>
    </View>
  )
}

export default Flatcards

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    cardItems: {
        width: 100,
        height: 100,
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 8,
        padding: 6,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#EF9878',
    },
    cardThree: {
        backgroundColor: '#EF6776',
    },
    cardFour: {
        backgroundColor: '#EF8889',
    },
    cardItem: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})