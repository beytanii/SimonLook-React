import * as React from 'react';
import { Component} from 'react';
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/Logos/simonLogo.png')} style={ styles.logo }/>
                <TouchableOpacity style={{flex: 2}} onPress={() => this.props.navigation.navigate('GameOperations')}>
                    <Image source={require('../../assets/Buttons/startBtn.png')} style={ styles.button }/>
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
        margin: 20,
    },
    button:{
        flex: 1,
        resizeMode: "contain",
        margin: 80,
    },
})

export default Home;