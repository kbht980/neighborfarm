import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Sell(){
    return(
        <View style={styles.container}>
            <Text>NeighborFarmで販売する</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})