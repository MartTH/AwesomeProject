import React, { useState } from "react";
import { Dimensions, TextInput } from "react-native";
import { Image, Text, Button, TouchableOpacity } from "react-native";
import { View } from "react-native";
import MapView from "react-native-maps";

export default function LocationVRU(){
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;

    return (
        <View>
            {/* LOGO VRU */}
            <View style={{ paddingLeft : 130, paddingRight : 120, paddingTop : 50 }}>
                <Image 
                source={{uri: "https://raw.githubusercontent.com/MartTH/AwesomeProject/main/assets/vru.png"}} 
                style={{ width : 100, height : 130 }} 
                />
            </View>
            {/* Student */}
            <View style={{flexDirection : 'row', paddingLeft : 100, paddingRight : 120, paddingTop : 25}}>
                <Image
                source={{uri: "https://raw.githubusercontent.com/MartTH/AwesomeProject/main/assets/icon_profile.png"}}
                style={{ width : 50, height : 50, borderRadius : 50/2 }} 
                />
                <View style={{ paddingLeft : 10}}>
                    <Text style={{ fontSize : 18}}>Student name</Text>
                </View>
            </View>
            {/* รายการ */}
            <View style={{flexDirection : 'row', paddingTop : 10}}>
                <TouchableOpacity>
                    <View style={{ padding: 10, backgroundColor: "blue", borderRadius: 20 }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' }}> หน้าหลัก </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 10, backgroundColor: "blue", borderRadius: 20 }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' }}> สถานที่ </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 10, backgroundColor: "blue", borderRadius: 20 }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' }}> จองรายวิชา </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ padding: 10, backgroundColor: "blue", borderRadius: 20 }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: "white" }}> ดูผลการเรียน </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* ชื่อตึก */}
            <View style={{flexDirection : 'row', paddingLeft : 110, paddingRight : 120, paddingTop : 25}}>
                <TextInput style={{ fontSize : 20}} returnKeyType = "numeric" placeholder="พิมพ์ชื่อสถานที่"></TextInput>
                <TouchableOpacity>
                    <View style={{ padding: 10, backgroundColor: "blue", borderRadius: 20 }}>
                        <Text style={{ fontSize: 15, textAlign: "center", color: 'white' }}> ค้นหา </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* ภาพหน้าตึก */}
            <View style={{ paddingLeft : 50, paddingRight : 50, paddingTop : 25 }}>
            <Image
                source={{uri: "https://raw.githubusercontent.com/MartTH/AwesomeProject/main/assets/Capture.PNG"}}
                style={{ width : 250, height : 150 }} 
                />
            </View>
            {/* ตำแหน่งตึก */}
            <View>
            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                latitude: 14.1325483,
                longitude: 100.6162809,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}        
            >        
            </MapView>
            </View>
        </View>
    );
    
}