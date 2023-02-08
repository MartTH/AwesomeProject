import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section6() {
    return (
        <View style={{ borderBottomWidth : 0.5 , padding : 10 , }}>
            <View>
                <Text style = {{fontSize : 20}}>Location</Text>
                <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 6 }} source={require('../../assets/map.jpg')}/>
        </View>
    );
}