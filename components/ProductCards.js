import React from 'react'
import { View, Text, Button, StyleSheet, Alert, Image, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
export default function ProductCards() {

    const promos = [
        {
            name:
                "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            key: "1",
        },
        {
            name:
                "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            key: "2",
        },
        {
            name:
                "https://images.unsplash.com/photo-1530286910461-6a1960d1e83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            key: "3",
        },
        {
            name:
                "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            key: "4",
        },
        {
            name:
                "https://images.unsplash.com/photo-1585866473493-b51336410446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            key: "5",
        },
        {
            name:
                "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=374&q=80",
            key: "7",
        },
        {
            name:
                "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            key: "8",
        },
    ];


    return (
       <View>

<View style={styles.offerPanel}>
            <Text style={{
              fontSize: 22,
              marginBottom: 15,
              fontWeight: "bold",
              marginLeft: 10,
              color: 'white',
              marginLeft : 20,
              fontWeight : 'bold'
            }}>New Styles <Entypo name="new" size={22} color="lightgray" ></Entypo> </Text>
            <FlatList horizontal={true}
              data={promos}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (

                  <Image
                    style={styles.box}
                    source={{ uri: item.name }}
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