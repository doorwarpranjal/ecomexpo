import React from 'react'
import { View, Text, Button, StyleSheet, Alert, FlatList,ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements' ;
import {Entypo} from 'react-native-vector-icons';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function ProductCards({promos,title}) {

   


    return (
       <View>

            <View style={styles.offerPanel}>
                <Text style={{
                    fontSize: 22,
                    marginBottom: 15,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: 'white',
                    marginLeft: 20,
                    fontWeight: 'bold'
                }}>{title} <Entypo name="new" size={22} color="lightgray" ></Entypo> </Text>
                <FlatList horizontal={true}
                    data={promos}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (

                            <Image
                            
                                style={styles.box}
                                source={{ uri: item.name }}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        )
                    }}
                />
            </View>


       </View>
    )
}


const styles = StyleSheet.create({

offerPanel : {
    height : "auto",
    backgroundColor : '#1E1F28',
    width : widthPercentageToDP('100%'),
    paddingVertical : 15 ,
},
box : {
    marginHorizontal: 10,
    height: 140,
    width: 140,
    paddingVertical: 10,
    borderRadius: 5,
    resizeMode : 'cover'
  
}


})