import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{ marginTop: -30, borderColor: 'grey', borderRadius: 10, margin: 10, padding: 10, backgroundColor: 'lightgrey' }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{  }}>
                    <Text style={{ fontSize: 20 }}>Hilton San Francisco</Text>
                </View>
            </View>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <FontAwesome name="star" size={10} color="orange" />
                    <FontAwesome name="star" size={10} color="orange" />
                    <FontAwesome name="star" size={10} color="orange" />
                    <FontAwesome name="star" size={10} color="orange" />
                    <FontAwesome name="star-half" size={10} color="orange" />
                </View>
            </View>
            <View style={{ }}>
                <View style={{ justifyContent : 'center'}}>
                    <Text style={{ fontSize: 13,textAlign : 'center' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                </View>
            </View>
        </View>
    );
}