import * as React from 'react';
import { Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

import MonsterDisplay from '../components/MonsterDisplay';

import Grid from 'react-native-grid-component';

var monsters =[
    require('../../assets/Monsters/monster1.png'),
    require('../../assets/Monsters/monster2.png'),
    require('../../assets/Monsters/monster3.png'),
    require('../../assets/Monsters/monster4.png'),
]

var sample =[
  require('../../assets/Monsters/monster1.png'),
  require('../../assets/Monsters/monster4.png'),
  require('../../assets/Monsters/monster1.png'),
  require('../../assets/Monsters/monster2.png'),
  require('../../assets/Monsters/monster3.png'),
  require('../../assets/Monsters/monster1.png'),
  require('../../assets/Monsters/monster1.png'),
  require('../../assets/Monsters/monster4.png'),
  require('../../assets/Monsters/monster3.png'),
]

class GameOperations extends Component{

    _renderItem = (data, i) => (
        <TouchableOpacity style={[{ backgroundColor: '#2c3e50' }, styles.item]} onPress={()=> console.log(i)}>
            <Image source={data} style={ styles.btnQuiz } />
        </TouchableOpacity>
    );    
    

    render(){
        return(
            <View style={styles.container}>
                <MonsterDisplay display={monsters}/>
                
                <View style={styles.container}>
                <View style={styles.midContainer} >
                    <Grid
                    style={styles.list}
                    renderItem={this._renderItem}
                    data={monsters}
                    numColumns={2}
                    keyExtractor={(_renderItem)=>{}}
                    />
                </View>
                <View style={styles.score}>
                    <ImageBackground source={require('../../assets/Logos/scoreboard.png')} style={styles.scoreboard}>
                        <Text style={styles.scoreText}>score</Text>
                    </ImageBackground>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#2c3e50",
        justifyContent: 'center',
        alignItems: "center",
    },
    slideshow:{
        alignSelf:'center',
        height: 400,
        width: 400,
        paddingRight: 10,
    },
    btnQuiz:{
      flex: 1,
      height: 200,
      width: 200,
    },
    list:{
      flex: 2
    },
    midContainer:{
      height:400
  },
    scoreboard:{
        width: 300,
        height: 80,
        justifyContent: 'center',
        alignItems: "center",
    },
})

export default GameOperations;

// https://medium.com/@KPS250/creating-image-slider-with-flatlist-in-react-native-1815d3793d99
// https://github.com/PaulBGD/react-native-image-slider
// https://github.com/haqiqiw/react-native-slideshow/issues/4