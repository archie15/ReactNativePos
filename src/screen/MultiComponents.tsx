import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flatcards from '../components/Flatcards'
import ElevatedCards from '../components/ElevatedCards'
import Images from '../components/Images'

const MultiComponents = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Multi Components</Text>
            </View>

            <Flatcards />
            <ElevatedCards />
            <Images />
        </ScrollView>
    </SafeAreaView>
  )
}

export default MultiComponents

const styles = StyleSheet.create({
  headingContainer: {
      flex: 1,
      paddingTop: 25,
      paddingBottom: 25,
      backgroundColor: '#FFF'
  },
  headingText: {
      fontSize: 25,
      textAlign: 'center',
      color: '#000'
  }
})