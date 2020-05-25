import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Login';
import Signup from './Signup';
import SwipeComp from './SwipeComp';

const StackNavigator = createStackNavigator({
    SwipeScreen:{
        screen:SwipeComp,
        navigationOptions:{
            headerShown:false
        }, 
    },
    LoginScreen:{
        screen:Login,
        navigationOptions:{
            headerShown:false
        }
    },
    SignScreen:{
        screen:Signup,
        navigationOptions:{
            headerShown:false
        }
    },

})

export default createAppContainer(StackNavigator);