import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, Text, StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, KeyboardAvoidingView,ActivityIndicator, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [loader,setLoader]=useState(false)

    const navigation = useNavigation();

    const handleSubmit = () => {
        setLoader(true)
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log('User account created & signed in!', user.uid);

                // Save additional user info in Firestore
                firestore()
                    .collection('Users')
                    .doc(user.uid)
                    .set({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        dateOfBirth: dateOfBirth,
                        city: city,
                        address: address,
                        uid: user.uid,
                        password:password
                    })
                    .then(() => {
                        console.log('User data added to Firestore!');
                    
                        navigation.navigate("Dashboard");
                        setLoader(false)
                    })
                    .catch(error => {
                        console.error("Error adding user data to Firestore: ", error);
                        setLoader(false)
                        
                    });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    setLoader(false)
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    setLoader(false)
                }

                console.error(error);
            });
    };

    return (
        <>
        { loader ? <SafeAreaView className="flex-1 items-center justify-center">
            <ActivityIndicator size={"large"} color={"#0078BB"}/>
        </SafeAreaView>:
        <SafeAreaView className='flex-1 items-start px-5 py-2 relative'>
            <View className='absolute ml-5 mt-3'>
                <TouchableOpacity onPress={() => (navigation.goBack())} className='py-2 px-4 rounded-2xl bg-black/10'>
                    <Image source={require("../assets/Arrow1.png")} />
                </TouchableOpacity>
            </View>
            <View className=''>
                <View className="w-full absolute inset-0 justify-center items-center top-44 opacity-100">
                    <Image
                        className='w-3/4 h-[310px]'
                        source={require('../assets/FearLogoBlurred.png')}
                    />
                </View>
            </View>
            <View className="items-start mt-16">
                <Text className='text-center font-semibold text-black text-[36px]'>Signup</Text>
                <Text className='text-black text-[17px] font-normal mt-1'>Get onboarded within a few steps!</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className='w-full'>
                <View className='w-full mt-4'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className='flex-row justify-between'>
                            <View className='w-36'>
                                <Text className='text-[18px] mb-2 text-black font-normal'>First name</Text>
                                <View>
                                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                            className='text-black justify-start items-center h-[48px] rounded-md bg-black/10 px-3'
                                            value={firstName}
                                            onChangeText={setFirstName}
                                            placeholder="John"
                                            autoCapitalize="none"
                                            placeholderTextColor={"#333"}
                                        />
                                    </KeyboardAvoidingView>
                                </View>
                            </View>
                            <View className='w-36'>
                                <Text className='text-[18px] mb-2 text-black font-normal'>Last name</Text>
                                <View >
                                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                             className='text-black justify-start items-center h-[48px] rounded-md bg-black/10 px-3'
                                            value={lastName}
                                            onChangeText={setLastName}
                                            placeholder="Doe"
                                            autoCapitalize="none"
                                            placeholderTextColor={"#333"}
                                        />
                                    </KeyboardAvoidingView>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <Text className='text-[18px] text-black font-normal mb-2 mt-2'>Email</Text>
                            <View className='w-full flex-row justify-start items-center h-[48px] rounded-md bg-black/10 px-3'>
                                <Image source={require("../assets/mailblack.png")} />
                                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                    <TextInput
                                        className='ml-2 text-black'
                                        value={email}
                                        onChangeText={setEmail}
                                        placeholder="Enter your email"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        placeholderTextColor={"#333"}
                                    />
                                </KeyboardAvoidingView>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-2'>
                            <Text className='text-black font-normal text-[18px] mb-2'>Password</Text>
                            <View className='w-full flex-row justify-start items-center h-[48px] rounded-md bg-black/10 px-3'>
                                <Image source={require("../assets/passwordblack.png")} />
                                <TextInput
                                    className='ml-3 text-black '
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="Enter your password"
                                    placeholderTextColor="#333"
                                    secureTextEntry={true}
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className='flex-row justify-between mt-2 mb-2'>
                            <View className='w-36'>
                                <Text className='text-[18px] mb-2 text-black font-normal'>Date of birth</Text>
                                <View >
                                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                         className='text-black justify-start items-center h-[48px] rounded-md bg-black/10 px-3'
                                            value={dateOfBirth}
                                            onChangeText={setDateOfBirth}
                                            placeholder="DD/MM/YYYY"
                                            autoCapitalize="none"
                                            placeholderTextColor={"#333"}
                                        />
                                    </KeyboardAvoidingView>
                                </View>
                            </View>
                            <View className='w-36'>
                                <Text className='text-[18px] mb-2 text-black font-normal'>City</Text>
                                <View >
                                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                            className='text-black justify-start items-center h-[48px] rounded-md bg-black/10 px-3'
                                            value={city}
                                            onChangeText={setCity}
                                            placeholder="Chicago"
                                            autoCapitalize="none"
                                            placeholderTextColor={"#333"}
                                        />
                                    </KeyboardAvoidingView>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                            <Text className='text-black font-normal text-[18px] mb-2'>Address</Text>
                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[48px] rounded-md bg-black/10 px-3'
                                    value={address}
                                    onChangeText={setAddress}
                                    placeholder="1945, Voyager PKWY, NYC, US, 20113"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                </View>
              
            </ScrollView>
            <View className='mt-10'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 120 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity className='w-[300px] h-[50px] flex-row justify-center items-center' onPress={handleSubmit}>
                            <Text className='text-white text-[17px] font-normal'>Register</Text>
                            <Image className='ml-2 h-[17px] w-[17px]' source={require("../assets/right.png")} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
        </SafeAreaView>}
        </>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5
    }
});

export default Register;
