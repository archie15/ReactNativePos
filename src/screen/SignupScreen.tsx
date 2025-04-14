import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("Login");
    }

  return (
    <View style={styles.container}>
        <View style={styles.topImageContainer}>
            <Image source={require('../assets/topVectorCreate.png')} style={styles.topImage} />
        </View>
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>POS</Text>
        </View>
        <View style={styles.subHeaderContainer}>
            <Text style={styles.subHeaderTitle}>Create an account</Text>
        </View>
        

        <View style={styles.inputContainer}>
            <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
            <TextInput style={styles.inputText} placeholder='Username'  />
        </View>
        <View style={styles.inputContainer}>
            <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
            <TextInput style={styles.inputText} placeholder='Password' secureTextEntry />
        </View>
        <View style={styles.inputContainer}>
            <Entypo name={"mail"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
            <TextInput style={styles.inputText} placeholder='Email'  />
        </View>
        <View style={styles.inputContainer}>
            <Entypo name={"mobile"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
            <TextInput style={styles.inputText} placeholder='Mobile' />
        </View>


        <View style={styles.createButtonContainer}>
            <Text style={styles.createText}>Create</Text>
            <LinearGradient
                start={{x: 0.0, y: 0.5}} end={{x: 2.5, y: 1.5}}
                locations={[0,0.5,0.6]}
                colors={['#FF6666', '#B210FF', '#B210FF']}
                style={styles.linearGradient}>
                <AntDesign name={"arrowright"} size={24} color={"#9A9A9A"} style={styles.inputSigninIcon} />
            </LinearGradient>
        </View>
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account? Login </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.footerTextCreate}>here.</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomImageContainer}>
            <Image source={require('../assets/bottomVectorCreate.png')} style={styles.bottomImage} />
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
    },
    topImageContainer: {},
    topImage: {
        width: '100%',
        height: 130,
    },
    headerContainer: {
        width: '100%',
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: '700',
        color: '#000'
    },
    subHeaderContainer: {
        width: '100%',
    },
    subHeaderTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        marginBottom: 20,
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 30,
        elevation: 10,
        marginVertical: 15,
        gap: 5,
    },
    inputIcon: {
        marginLeft: 15,
    },
    inputText: {
        flex: 1,
        fontSize: 16,
    },
    createButtonContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginRight: 30,
        marginTop: 20,
    },
    createText: {
        color: '#262626',
        fontSize: 22,
        fontWeight: 'bold',
    },
    linearGradient: {
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 25,
        width: 70,
        alignItems: 'center',
        marginLeft: 10,
    },
    inputSigninIcon: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    footerText: {
        color: '#000',
        fontSize: 16,
    },
    footerTextCreate: {
        textDecorationLine: 'underline',
        color: '#000',
        fontSize: 16,
    },
    bottomImageContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    bottomImage: {
        width: 100,
        height: 150,
    }
})