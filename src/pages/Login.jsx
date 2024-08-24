import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, Button, Text, StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard, Platform, ImageBackground, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

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
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('Success', 'Logged in successfully!');
                navigation.navigate("Dashboard");
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Error', 'That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('Error', 'That email address is invalid!');
                } else if (error.code === 'auth/user-not-found') {
                    Alert.alert('Error', 'No user found with this email!');
                } else if (error.code === 'auth/wrong-password') {
                    Alert.alert('Error', 'Incorrect password!');
                } else {
                    Alert.alert('Error', error.message);
                }
            });
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require("../assets/Rectangle1.png")}>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/FearLogo.png')}
                    />
                </View>

                <KeyboardAvoidingView
                    style={styles.avoidingView}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>Log In to F.E.A.R.</Text>
                            <Text style={styles.subtitle}>Welcome back you have been missed!</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View>
                                    <Text style={styles.label}>Email</Text>
                                    <View style={styles.inputWrapper}>
                                        <Image source={require("../assets/mail.png")} />
                                        <TextInput
                                            style={styles.input}
                                            value={email}
                                            onChangeText={handleEmailChange}
                                            placeholder="Enter your email"
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            placeholderTextColor={"#FFF"}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.label}>Password</Text>
                                    <View style={styles.inputWrapper}>
                                        <Image source={require("../assets/password.png")} />
                                        <TextInput
                                            style={styles.input}
                                            value={password}
                                            onChangeText={handlePasswordChange}
                                            placeholder="Enter your password"
                                            placeholderTextColor="#fff"
                                            secureTextEntry={true}
                                            autoCapitalize="none"
                                        />
                                    </View>
                                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                      
                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={styles.buttonContainer}>
                            <LinearGradient
                                colors={['#01101D', '#0078BB']}
                                style={styles.linearGradient}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
                                    <Text style={styles.loginButtonText}>Login</Text>
                                    <Image style={styles.rightArrow} source={require("../assets/right.png")} />
                                </TouchableOpacity>
                            </LinearGradient>
                            <View style={styles.signupContainer}>
                                <Text style={styles.notAMember}>Not a member? </Text>
                                <Text onPress={() => navigation.navigate("Register")} style={styles.signupText}>Sign Up</Text>
                            </View>
                        </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    backButtonContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    backButton: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: '75%',
        height: 300,
    },
    avoidingView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 17,
        fontWeight: '300',
    },
    inputContainer: {
        marginTop: 16,
    },
    label: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
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
    forgotPassword: {
        color: '#FFF',
        fontSize: 12,
        marginTop: 8,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    linearGradient: {
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#0078BB',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    loginButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight:"500"
    },
    rightArrow: {
        marginLeft: 10,
        width: 17,
        height: 17,
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    notAMember: {
        color: '#FFF',
        fontSize: 14,
    },
    signupText: {
        color: '#0089D6',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default Login;
