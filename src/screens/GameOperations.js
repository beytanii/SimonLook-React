import * as React from 'react';
import { Component} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Button, Modal } from 'react-native';

import MonsterDisplay from '../components/MonsterDisplay';

import Grid from 'react-native-grid-component';
import ImageSlider from 'react-native-image-slider';


const monsters =[
    require('../../assets/Monsters/monster1.png'),
    require('../../assets/Monsters/monster2.png'),
    require('../../assets/Monsters/monster3.png'),
    require('../../assets/Monsters/monster4.png'),
]

var sample =[
    require('../../assets/Monsters/monster2.png'),
    require('../../assets/Monsters/monster3.png'),
    require('../../assets/Monsters/monster1.png'),
    require('../../assets/Monsters/monster1.png'),
    require('../../assets/Monsters/monster4.png'),
    require('../../assets/Monsters/monster2.png'),
    require('../../assets/Monsters/monster1.png'),
    require('../../assets/Monsters/monster4.png'),
]

var monsterArr = []

var answerArr = []

class GameOperations extends Component{
    addRandomMonster = () => {
        // console.log('hello')
        var x = Math.floor(Math.random()* 4);
        monsterArr.push(monsters[x]);
        console.log(monsterArr);
    }

    _renderItem = (data, i) => (
        <TouchableOpacity style={[{ backgroundColor: '#2c3e50' }, styles.item]} onPress={()=> console.log(i)}>
            <Image source={data} style={ styles.btnQuiz } />
        </TouchableOpacity>
    );    
    

    render(){
        return(
            <View style={styles.container}>

                <MonsterDisplay display={monsterArr} time={(monsterArr.length * 1200)}/>
                
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
// https://reactnativeforyou.com/how-to-make-react-native-modal-close-automatically/