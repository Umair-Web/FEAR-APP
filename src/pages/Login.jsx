import React, { useState } from 'react'
import { SafeAreaView, ScrollView, TextInput, Button, Text, StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, Platform, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import bgimage from "../assets/Rectangle1.png"
import LinearGradient from 'react-native-linear-gradient'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        alert(`Email: ${email}\nPassword: ${password}`);
    };
    return (
        <SafeAreaView className='flex-1'>
            <ImageBackground className='flex-1 items-start px-5 py-2 relative' source={require("../assets/Rectangle1.png")}>
                <View className='absolute ml-5 mt-3'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                </View>


                <View className="w-full items-center mb-5">
                    <Image
                        className='w-3/4 h-[300px]'
                        source={require('../assets/FearLogo.png')}
                    />
                </View>


                <ScrollView showsVerticalScrollIndicator={false} className='w-full'>
                    <View className="items-start">
                        <Text className='text-center font-semibold text-white text-[32px] leading-[41px]'>Log In to F.E.A.R.
                        </Text>
                        <Text className=' text-white text-[17px] font-light'>Welcome back you have been missed!</Text>
                    </View>

                    <View className='w-full mt-4'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                <Text className='text-white font-normal text-[18px] mb-2'>Email</Text>
                                <View className='w-full flex-row justify-start items-center h-[48px] rounded-md bg-[#5a6675] px-3'>
                                    <Image source={require("../assets/mail.png")} />
                                    <KeyboardAvoidingView
                                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                                        <TextInput
                                            className='ml-2 text-white font-normal'
                                            value={email}
                                            onChangeText={handleEmailChange}
                                            placeholder="Enter your email"
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            placeholderTextColor={"#FFF"}

                                        />
                                    </KeyboardAvoidingView>
                                </View>


                            </View>



                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <KeyboardAvoidingView
                                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                className='mt-2'
                               >
                                <Text className='text-white font-normal text-[18px] mb-2'>Password</Text>
                                <View className='w-full flex-row justify-start items-center h-[48px] rounded-md bg-[#5a6675] px-3'>
                                    <Image source={require("../assets/password.png")} />
                                    <TextInput
                                        className='ml-3 text-white font-normal'
                                        value={password}
                                        onChangeText={handlePasswordChange}
                                        placeholder="Enter your password"
                                        placeholderTextColor="#fff"  // Set the placeholder text color to white
                                        secureTextEntry={true}
                                        autoCapitalize="none"
                                    />
                                </View>
                                <Text className='text-white font-normal text-[12px] mb-4 mt-2'>Forgot password ?</Text>
                            </KeyboardAvoidingView>



                        </TouchableWithoutFeedback>
                    </View>


                    <View className='mb-10'>
                        <LinearGradient
                            colors={['#01101D', '#0078BB']}
                            style={{ width: "300px", height: "0px",  shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 120, }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <TouchableOpacity className='w-[300px] h-[50px] flex-row justify-center items-center'>
                                <Text className='text-white text-[17px] font-normal'>Login</Text>
                                <Image className='ml-2 h-[17px] w-[17px]' source={require("../assets/right.png")}></Image>
                               
                            </TouchableOpacity>
                        </LinearGradient>
                        <View className='mt-4  justify-center flex-row'>
                        <Text className='text-white text-[14px] font-normal '>Not a member? </Text>
                        <Text className='text-[14px] font-semibold text-[#0089D6]'>Sign Up</Text>
                        </View>
                        
                    </View>
                </ScrollView>
            </ImageBackground>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avoidingView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
    },
    inputContainer: {
        width: '100%',
        marginTop: 16,
    },
    label: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 8,
    },
    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        backgroundColor: '#5a6675',
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
    },
});
export default Login