import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import globalStyles from '../styles/globalStyles'

const ElevatedCards = () => {
  return (
    <SafeAreaView>
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Elevated Cards</Text>
            <ScrollView horizontal={true}>
                <View style={styles.cardContainer}>
                    <View style={[styles.cardItems, styles.cardOne]}><Text style={styles.cardItem}>Card One</Text></View>
                    <View style={[styles.cardItems, styles.cardTwo]}><Text style={styles.cardItem}>Card Two</Text></View>
                    <View style={[styles.cardItems, styles.cardThree]}><Text style={styles.cardItem}>Card Three</Text></View>
                    <View style={[styles.cardItems, styles.cardFour]}><Text style={styles.cardItem}>Card Four</Text></View>
                    <View style={[styles.cardItems, styles.cardFive]}><Text style={styles.cardItem}>Card Five</Text></View>
                </View>
             </ScrollView>
            </View>
    </SafeAreaView>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 6
    },
    cardItems: {
        width: 100,
        height: 100,
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 4,
        padding: 6,
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'green',
    },
    cardThree: {
        backgroundColor: 'blue',
    },
    cardFour: {
        backgroundColor: 'yellow',
    },
    cardFive: {
        backgroundColor: 'magenta',
    },
    cardItem: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})