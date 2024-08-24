import React from 'react';
import { View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import WebView from 'react-native-webview';
import MenuBar from '../Components/MenuBar';
import BgImage from '../Components/BgImage';
import Header from '../Components/Header';

const { height: screenHeight } = Dimensions.get("window");

const ExperimentScreen = () => {
    const htmlContent = `
        <html>
        <head>
            <script src="https://embed.sandbox.array.io/cms/array-web-component.js"></script>
            <script src="https://embed.sandbox.array.io/cms/array-credit-overview.js?appKey=3F03D20E-5311-43D8-8A76-E4B5D77793BD"></script>
        </head>
        <body>
            <array-credit-overview
                appKey="3F03D20E-5311-43D8-8A76-E4B5D77793BD"
                userToken="93061BA4-3DD3-43BB-8574-685B860FE894"
                sandbox="true"
            ></array-credit-overview>
        </body>
        </html>
    `;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View style={{ flex: 1, paddingHorizontal: 20, height: screenHeight * 0.8 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <WebView
                        originWhitelist={['*']}
                        source={{ html: htmlContent }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        style={{ height: screenHeight * 0.8, marginVertical: 10 }}
                    />
                </ScrollView>
            </View>
            <BgImage />
            <MenuBar />
        </SafeAreaView>
    );
};

export default ExperimentScreen;
