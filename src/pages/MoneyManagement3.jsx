import React, { useState } from 'react'
import { Image, SafeAreaView, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import MenuBar from '../Components/MenuBar';
import LinearGradient from 'react-native-linear-gradient';
const MoneyManagement3 = () => {
    const options = [
        { id: 1, label: 'This is not my account' },
        { id: 2, label: 'I have nerver paid late' },
        { id: 3, label: 'This account is bankcruptcy' },
        { id: 4, label: 'This account is closed' },
        { id: 5, label: 'I have paid this account in full' },
        { id: 6, label: 'I pass this before it went to collection or before itwas charged off.' },
        { id: 7, label: 'Other.' },
    ];

    const options2 = [
        { id: 1, label: 'This is not my account' },
        { id: 2, label: 'I have nerver paid late' },
        { id: 3, label: 'This account is bankcruptcy' },
        { id: 4, label: 'This account is closed' },
        { id: 5, label: 'I have paid this account in full' },
        { id: 6, label: 'I pass this before it went to collection or before itwas charged off.' },
        { id: 7, label: 'Other.' },
    ];
  

    const options3 = [
        { id: 1, label: 'This is not my account' },
        { id: 2, label: 'I have nerver paid late' },
        { id: 3, label: 'This account is bankcruptcy' },
        { id: 4, label: 'This account is closed' },
        { id: 5, label: 'I have paid this account in full' },
        { id: 6, label: 'I pass this before it went to collection or before itwas charged off.' },
        { id: 7, label: 'Other.' },
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
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [creditor1, setCreditor1] = useState('');
    const [creditor2, setCreditor2] = useState('');
    const [creditor3, setCreditor3] = useState('');
    const [accountnumber1, setAccountnumber1] = useState('');
    const [accountnumber2, setAccountnumber2] = useState('');
    const [accountnumber3, setAccountnumber3] = useState('');

    return (
        <SafeAreaView className='bg-white flex-1'>
            <View className='px-5'>
                <View className='mt-3 flex-row items-center justify-between'>
                    <TouchableOpacity className='py-2 px-4 rounded-2xl bg-black/10'>
                        <Image source={require("../assets/Arrow1.png")} />
                    </TouchableOpacity>
                    <Image className='w-[43px] h-[43px] rounded-full' source={require("../assets/download.jpeg")} />
                    <Text className="text-[18px] font-normal text-black">David Walker</Text>
                    <Image className='w-[20px] h-[20px]' source={require("../assets/bell-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/question-black.png")} />
                    <Image className='w-[18px] h-[18px]' source={require("../assets/settings-black.png")} />
                </View>
            </View>
            <Text className='font-bold text-black text-[16px] mt-2 px-5'>Credit Repost Dispute Form</Text>
            <Text className='font-normal text-black text-[12px] px-5'>Found inaccuracies in your report? if so, use thid form to contact the credit bureau (Experian,Equifax, or TransUnion) that sipplied the information. Simply follow the instruction provided,then main the form to the appropriate credit bureau.</Text>

            <Text className='font-normal text-black text-[12px] px-5 mt-1'>Instructions</Text>
            <Text className='font-normal text-black text-[12px] px-5 mt-1'>1. Write the name and account number of the creditor in question under the item in Dispute section</Text>

            <Text className='font-normal text-black text-[12px] px-5 mt-1'>2. Write in the reason for your dispute in the reason for dispute section</Text>

            <Text className='font-normal text-black text-[12px] px-5 mt-1 mb-2'>3. Sign and mail to the appropriate credit bureau.</Text>

            <View className=' h-[280px]'>
            <ScrollView className='px-5'>
                <Text className='font-bold text-[15px] text-[#004770] mb-1 mt-1' >1.Contact Information</Text>
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
                <Text className='font-bold text-[15px] text-[#004770] mb-1 mt-1' >2.Dispute Information</Text>

                <View className='flex-row justify-between mt-1 mb-1'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                            <View >
                                <TextInput
                                    className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                    value={creditor1}
                                    onChangeText={setCreditor1}
                                    placeholder="Creditor"
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
                                    value={accountnumber1}
                                    onChangeText={setAccountnumber1}
                                    placeholder="Account Number"
                                    placeholderTextColor="#333"
                                    autoCapitalize="none"
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>

                </View>

                <View>
                    <Text className='font-semibold text-[13px] text-black mb-1'>This information is inaccurate because:</Text>
                    <View className='flex-col gap-y-1 justify-between'>
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
                    <View className='flex-row justify-between mt-1 mb-1'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                                <View >
                                    <TextInput
                                        className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                        value={creditor2}
                                        onChangeText={setCreditor2}
                                        placeholder="Creditor"
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
                                        value={accountnumber2}
                                        onChangeText={setAccountnumber2}
                                        placeholder="Account Number"
                                        placeholderTextColor="#333"
                                        autoCapitalize="none"
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </TouchableWithoutFeedback>

                    </View>
                    <Text className='font-semibold text-[13px] text-black mb-1'>This information is inaccurate because:</Text>
                    <View className='flex-col gap-y-1 justify-between'>
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
                    <View className='flex-row justify-between mt-1 mb-1'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='w-[149px]'>

                                <View >
                                    <TextInput
                                        className='text-black justify-start items-center h-[32px] rounded-md bg-black/10 text-[11px] p-1 px-2'
                                        value={creditor3}
                                        onChangeText={setCreditor3}
                                        placeholder="Creditor"
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
                                        value={accountnumber3}
                                        onChangeText={setAccountnumber3}
                                        placeholder="Account Number"
                                        placeholderTextColor="#333"
                                        autoCapitalize="none"
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </TouchableWithoutFeedback>

                    </View>
                    <Text className='font-semibold text-[13px] text-black mb-1'>This information is inaccurate because:</Text>
                    <View className='flex-col gap-y-1 justify-between'>
                        {options3.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                className="flex-row items-center"
                                onPress={() => setSelectedOption3(option.id)}
                            >
                                <View className="h-3 w-3 border-[1px] border-[#00325F] rounded-full items-center justify-center">
                                    {selectedOption3 === option.id && <View className="h-2 w-2 bg-[#00325F] rounded-full" />}
                                </View>
                                <Text className="ml-1 text-[11px] font-semibold text-[#4B4242]">{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                   

                </View>
               
            
            </ScrollView>

            </View>

            <View className=' px-8 mt-12'>
                    <LinearGradient
                        colors={['#01101D', '#0078BB']}
                        style={{ width: "300px", height: "0px", shadowColor: "#0078BB", shadowOffset: { width: 10, height: 10 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 10, borderRadius: 120 }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity className='w-[300px] h-[40px] flex-row justify-center items-center' >
                            <Text className='text-white text-[13px] font-normal'>For more information Contact Rich Work</Text>
                           
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
           
       <MenuBar/>

        </SafeAreaView>
    )
}

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

export default MoneyManagement3