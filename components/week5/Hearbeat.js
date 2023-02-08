import React, { useState } from "react";
import { View,TouchableOpacity,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Heartbeat() {   
    const [number, setNumber] = useState('0');

    const onPressButton = () => {

        let num = Number(number)+1;
        setNumber(num);
                
    };

    return (
        <View style={{padding : 30,flexDirection : 'row', justifyContent : 'space-around'}}>
            <View>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={30} color="orange"/>
                </TouchableOpacity>
                <Text style={{fontSize : 20}}>{number}</Text>
            </View>
        </View>
    );
}
