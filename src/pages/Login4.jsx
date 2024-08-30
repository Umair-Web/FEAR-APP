import React, { useState } from 'react'
import { Image, SafeAreaView, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, TextInput, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BgImage from '../Components/BgImage';


const Login4 = () => {
    const options = [
        { id: 1, label: 'Employed' },
        { id: 2, label: 'Self-Employed' },
        { id: 3, label: 'Unemployed' },
        { id: 4, label: 'Retired' },
    ];
    const options2 = [
        { id: 1, label: 'Salary' },
        { id: 2, label: 'Wages' },
        { id: 3, label: 'Investments' },
        { id: 4, label: 'Other' },
    ];

    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [socialSecurityNumber, setSocialSecurityNumber] = useState('');
    const [residentialAddress, setResidentialAddress] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [occupation, setOccupation] = useState('');
    const [employer, setEmployer] = useState('');
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [progress, setProgress] = useState(33);

    const navigation = useNavigation();

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className="justify-center items-center">
                <Image source={require("../assets/FearLogo128.png")} className='w-[80px] h-[80px]' />

            </View>
            <Text className='font-bold text-black text-center text-[18px]'>Join F.E.A.R App Now</Text>

            <ScrollView className='px-5'>
                <Text className='font-bold text-[15px] text-[#004770] mb-1 mt-1' >Personal Information</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={fullName}
                                onChangeText={setFullName}
                                placeholder="Full Name"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={emailAddress}
                                onChangeText={setEmailAddress}
                                placeholder="Email Address"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                placeholder="Phone Number"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <View className='flex-row justify-between mt-1'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                    value={dateOfBirth}
                                    onChangeText={setDateOfBirth}
                                    placeholder="Date of Birth"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                    value={socialSecurityNumber}
                                    onChangeText={setSocialSecurityNumber}
                                    placeholder="Social Security Number"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>

                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={residentialAddress}
                                onChangeText={setResidentialAddress}
                                placeholder="Residental address"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>

                <View className='flex-row justify-between mt-1'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                    value={streetAddress}
                                    onChangeText={setStreetAddress}
                                    placeholder="Street Address"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                    value={zipCode}
                                    onChangeText={setZipCode}
                                    placeholder="Zip Code"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>

                </View>
                <View className='flex-row justify-between mt-1'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                    value={city}
                                    onChangeText={setCity}
                                    placeholder="City"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                    value={state}
                                    onChangeText={setState}
                                    placeholder="State"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>

                </View>

                <Text className='font-bold text-[15px] text-[#004770] mt-1' >Employment Information</Text>
                <View>
                    <Text className='font-semibold text-[13px] text-black mb-1'>Employment Status</Text>
                    <View className='flex-row justify-between'>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                className="flex-row items-center"
                                onPress={() => setSelectedOption(option.id)}
                            >
                                <View className="h-3 w-3 border-[1px] border-[#00325F] rounded-full items-center justify-center">
                                    {selectedOption === option.id && <View className="h-2 w-2 bg-[#00325F] rounded-full" />}
                                </View>
                                <Text className="ml-1 text-[11px] font-semibold text-[#4B4242]">{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={occupation}
                                onChangeText={setOccupation}
                                placeholder="Occupation"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mt-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={employer}
                                onChangeText={setEmployer}
                                placeholder="Employer"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <View>
                    <Text className='font-semibold text-[13px] text-black mb-1'>Source of income</Text>
                    <View className='flex-row justify-between'>
                        {options2.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                className="flex-row items-center"
                                onPress={() => setSelectedOption2(option.id)}
                            >
                                <View className="h-3 w-3 border-[1px] border-[#00325F] rounded-full items-center justify-center">
                                    {selectedOption2 === option.id && <View className="h-2 w-2 bg-[#00325F] rounded-full" />}
                                </View>
                                <Text className="ml-1 text-[11px] font-semibold text-[#4B4242]">{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <Text className='font-bold text-[15px] text-[#004770]' >Account Setup</Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mb-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={username}
                                onChangeText={setUsername}
                                placeholder="Username"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='mb-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={newPassword}
                                onChangeText={setNewPassword}
                                placeholder="New password"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className=' mb-1'>

                        <View >
                            <TextInput
                                className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="Confirm password"
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                            />
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
                <View className=' w-11/12 left-4'>
                    <View className='flex-row items-end justify-end'>
                        <Text className='text-[11px] font-bold text-[#00325F] '>1 of 3 Completed</Text>

                    </View>
                    <View style={styles.container}>
                        <ProgressBar progress={progress} />
                    </View>
            </View>
            </ScrollView>

          
            <TouchableOpacity activeOpacity={1} delayPressIn={0.1} onPress={()=>(navigation.navigate("SecurityQuestion"))} className='absolute w-[26px] h-[26px] border-2 border-[#00325F] rounded-full top-2 right-4 items-center justify-center'>
                <Image source={require("../assets/right-arrow.png")} className='w-4 h-4' />
            </TouchableOpacity>

            <BgImage/>

        </SafeAreaView>
    )
}
const ProgressBar = ({ progress }) => {
    return (
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4
    },
    progressBarContainer: {
        width: '100%',
        height: 4,
        backgroundColor: '#e0e0df',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#00325F',
        borderRadius: 10,
    },
});

export default Login4