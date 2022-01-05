import React from 'react';
import ProgressCircle from 'react-native-progress-circle'
import {SafeAreaView, Text, StyleSheet ,View,Image} from 'react-native';
const Percent = () =>{
    return (
        <SafeAreaView style= {{flex : 1}}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent : 'space-around', margin:30 }}>
                <View>
                    <ProgressCircle  //style={styles.percent}
                        percent={75}
                        radius={70}
                        borderWidth={8}
                        color="#2D46B9"
                        shadowColor ="#E6E9EF"
                        bgColor="#fff" //style={styles.per}
                    >
                        <Image source={require('./assets/images/office_logo.jpg')}  />
                    </ProgressCircle>
                    <Text style={styles.num}>17</Text>
                    <Text style={styles.logo_name}>Global Offices</Text>
                </View>
                <View>
                    <ProgressCircle //style={styles.percent}
                        percent={60}
                        radius={70}
                        borderWidth={8}
                        color="#7FC8A9"
                        shadowColor="#E6E9EF"
                        bgColor="#fff" //style={styles.per}
                    >
                        <Image source={require('./assets/images/germany_logo.jpg')}  /> 
                    </ProgressCircle>
                    <Text style={styles.num}>162</Text>
                    <Text style={styles.logo_name}>Countries Reached</Text>
                </View>
            </View>

            <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-around', margin: 30 }}>
                <View>
                    <ProgressCircle //style={styles.percent}
                        percent={65}
                        radius={70}
                        borderWidth={8}
                        color="#FFB740"
                        shadowColor="#E6E9EF"
                        bgColor="#fff" //style={styles.per}
                    >
                        <Image source={require('./assets/images/trade_logo.jpg')} />
                    </ProgressCircle>
                    <Text style={styles.num}>219</Text>
                    <Text style={styles.logo_name}>Industry & Trade Categories</Text>
                </View>
                <View>
                    <ProgressCircle // style={styles.percent}
                        percent={70}
                        radius={70}
                        borderWidth={8}
                        color="#FF3D68"
                        shadowColor="#E6E9EF"
                        bgColor="#fff" //style={styles.per}
                    >
                        <Image source={require('./assets/images/network_logo.jpg')} />
                    </ProgressCircle>
                    <Text style={styles.num}>162</Text>
                    <Text style={styles.logo_name}>Countries Reached</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    per :{
        marginTop :20,
    },
    percent :{
        flexDirection : 'row'
    },
    num :{
        color:'#2D46B9',
        fontWeight : 'bold',
        textAlign :'center',
        top : 5,
        fontSize :30,
    },
    logo_name :{
        color: '#2D46B9',
        textAlign :'center',
        fontWeight : 'bold'
    },
    
})
export default Percent