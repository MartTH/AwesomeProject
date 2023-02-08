import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section7() {
    return (
        <View style={{ padding: 10 }}>
            <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontSize: 20 }}>Room type</Text>
                </View>
            <View style={{ flexDirection: 'row' , padding : 10 }}>
                <View style={{  }}>
                    <Image style={{ flex: 1, borderStartWidth : 90 ,borderRadius : 10 , height: 70, width: 120 }} source={require('../../assets/room-8.jpg')}/>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 20 , marginBottom : 30}}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 20 ,color : "tomato"}}>$399.99</Text>
                    <Text style={{ color: "lightblue" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}