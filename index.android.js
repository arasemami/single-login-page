 
import React,{Component} from 'react';
import {AppRegistry, Text , View , ListView , StyleSheet, Image  } from 'react-native';

import Login from './app/component/login/login.js'; 



export default class myapp extends Component{

 

    render(){

            return(
              <Login />
                 
                 

            );
    }
 


}




const style=StyleSheet.create({

        container:{
            flex:1,
            backgroundColor:'#3498DB',

        } ,
    

});





 