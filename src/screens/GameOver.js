import * as React from 'react';
import { Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class GameOver extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/Logos/gameovertext.png')} style={ styles.logo }/>
                <TouchableOpacity style={{flex: 2}} onPress={() => this.props.navigation.navigate('Home')}>
                    <Image source={require('../../assets/Buttons/playagain.png')} style={ styles.button }/>
                </TouchableOpacity>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#2c3e50",
        alignItems: "center",
    },
    logo:{
        flex:4,
        resizeMode: "contain",
        width: 300,
        margin: 20,
    },
    button:{
        flex: 1,
        resizeMode: "contain",
        margin: 80,
    },
})

export default GameOver;