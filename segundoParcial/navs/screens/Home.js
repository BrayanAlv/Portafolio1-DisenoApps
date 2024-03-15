import React from "react";

import {View, Text} from 'react-native';
import Button from "../componets/Button";

export default function Home({navigation}){
    return (
       <View>
        <Text>Hola</Text>
            <Button 
            onPress ={() => {
                navigation.navigate('Profile')
            }}
            />
       </View> 
    );
}