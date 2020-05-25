import React, { Component } from 'react'
import {View,Text, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default class SwipeComp extends Component {
    constructor(props){
        super(props);
        this.state={
            sign:null,
            signup:null,
            show:false
        }
    }
    magic = (index) =>{
        if(index==2){
            this.setState({
                sign:'bounceInLeft',
                signup:'bounceInRight',
                show:true

            })
        }
        else{
            this.setState({
                sign:null,
                signup:null,
                show:false
            })
        }
    }
    render() {
        return (
           <Swiper 
           loop={false}
           dot={<View style={styles.dot}/>}
           activeDot={<View style={styles.activeDot}/>}
           onIndexChanged={(index)=>this.magic(index)}
           >
           <View style={styles.slide}>
           <View style={styles.header}>
           <Image 
           style={styles.image}
           source={require('../src/Assets/asset1.png')}
           resizeMode="stretch"
           />
           </View>
           <View style={styles.footer}>
           <Text style={styles.txt}>Cloud storage</Text>
           <Text style={styles.txt1}>Class components make use of ES6 class and extend the Component class in React</Text>
           </View>
           </View>
           <View style={styles.slide}>
           <View style={styles.header}>
           <Image 
           style={styles.image}
           source={require('../src/Assets/asset2.png')}
           resizeMode="stretch"
           />
           </View>
           <View style={styles.footer}>
           <Text style={styles.txt}>Cloud storage</Text>
           <Text style={styles.txt1}>Class components make use of ES6 class and extend the Component class in React</Text>
           </View>
           </View>
           <View style={styles.slide}>
           <View style={styles.header}>
           <Image 
           style={styles.image}
           source={require('../src/Assets/asset3.png')}
           resizeMode="stretch"
           />
           </View>
           <View style={styles.footer}>
           <Text style={styles.txt}>Cloud storage</Text>
           <Text style={styles.txt1}>Class components make use of ES6 class and extend the Component class in React</Text>
           <View style={{flexDirection:'row'}}>
           <Animatable.View
           animation={this.state.sign}
           delay={0}
           duration={1500}
           useNativeDriver>
           <TouchableOpacity style={[styles.button,{
               borderWidth:1,
               borderColor:'blue',
               borderRadius:50,
               marginTop:5,
               marginLeft:10,
               
           }]}
           onPress={()=>this.props.navigation.navigate('SignScreen')}>
           <Text style={{color:'white'}}>Sign Up</Text>
           
           </TouchableOpacity>
           </Animatable.View>
           <Animatable.View
           animation={this.state.signup}
           delay={0}
           duration={1500}
           useNativeDriver
           >
           <TouchableOpacity style={[styles.button,{
            borderWidth:1,
            borderColor:'blue',
            borderRadius:50,
            marginTop:5,
            marginLeft:10,
           }]}>
           <Text style={{color:'white'}}>Log In</Text>
           
           </TouchableOpacity>
           </Animatable.View>
           </View>
           </View>
           </View>
           </Swiper>
             
        )
    }
}

const {height,width} = Dimensions.get('screen');
const height_image = height * 0.5 * 0.8;
const width_image = height_image * 1.1;
const Button_width = width * 0.3;

const styles = StyleSheet.create({
    slide:{
        flex:1,
        backgroundColor:'pink'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:1,
        paddingHorizontal:10,
        alignItems:'center',
    },
    image:{
        height:height_image,
        width:width_image,
        
    },
    txt:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'bold',
        color:'blue'
    },
    txt1:{
        textAlign:'center',
        color:'grey'
    },
    dot:{
        height:8,
        width:8,
        backgroundColor:'white',
        borderRadius:4,
        marginHorizontal:5,
        marginVertical:3
    },
    activeDot:{
        width:20,
        height:8,
        backgroundColor:'blue',
        borderRadius:5
    },
    button:{
        width:Button_width,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        

    }
})
