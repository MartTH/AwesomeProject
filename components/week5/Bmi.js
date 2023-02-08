import React, { useState } from "react";
import { Button, Text, TextInput, View,TouchableOpacity } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [bmt, setBmt] = useState('Normal');

    console.log("STATE : ", weight, height, bmi, bmt);
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));

        let BMTT = "";
        if(output < 18.5){
            BMTT = "Normal";         
        }else if(output >= 18.5 && output < 24.99){
            BMTT = "Overweight";
        }else if(output >= 30 && output < 39.99){
            BMTT = "Obese";
        }else if(output > 40){
            BMTT = "Morbidly Obese";
        }
        setBmt(BMTT);

        
    };

    return (
        <View>
            {/*บรรทัดที่ 1 */}
            <View style={{ backgroundColor : 'white', padding : 20, marginVertical : 10, height : 150, justifyContent : 'space-around'}}>
                <Text style={{ fontSize : 20}}>Weighi (kg.)</Text>
                <TextInput value={ weight } onChangeText={ (newWeight) => setWeight(newWeight) } style={{ fontSize : 20}} returnKeyType = "numeric" placeholder="In put your Weight ..."></TextInput>
            </View>
            {/*บรรทัดที่ 2 */}
            <View style={{ backgroundColor : 'white', padding : 20, marginVertical : 10, height : 150, justifyContent : 'space-around'}}>
                <Text style={{ fontSize : 20}}>Height (cm.)</Text>
                <TextInput value={ height } onChangeText={ (newHeight) => setHeight(newHeight) } style={{ fontSize : 20}} returnKeyType = "numeric" placeholder="In put your Height ..."></TextInput>
            </View>
            {/*บรรทัดที่ 3 */}
            <View style={{ flexDirection : 'row', marginVertical : 10}}>
                <View style={{  flex : 1, backgroundColor : "white", marginRight : 10, height : 100, justifyContent : 'center', alignItems : 'center'}}>
                    <Text style={{ fontSize : 20}}>{ bmi }</Text>
                </View>
                <View style={{  flex : 1, backgroundColor : "white", marginRight : 10, height : 100, justifyContent : 'center', alignItems : 'center'}}>
                    <Text style={{ fontSize : 20}}>{ bmt }</Text>
                </View>
            </View>
            {/*บรรทัดที่ 4 */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}> Calculate </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
