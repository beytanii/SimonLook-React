import * as React from 'react';
import { Component} from 'react';
import { View, Text, StyleSheet, Modal, ImageBackground, TouchableOpacity, Image } from 'react-native';

import ImageSlider from 'react-native-image-slider';


class MonsterDisplay extends Component{
    state = {
        isModalVisible: true
    };

    hideModal = () => {
		this.setState({isModalVisible: false})
	};

    gameplay(position) {
      console.log(position)
      if (position === 0) {
        this.hideModal
      }
    }

    componentWillUnmount(){
        this.hideModal
    }
  
    render() {
      return (
            <Modal
                animationType="slide"
                transparent={true}
                isVisible={this.state.isModalVisible}
                >
                    <ImageSlider
                        autoPlayWithInterval={1000}
                        images={this.props.display}
                        style={styles.slideshow}
                        // onPositionChanged={(position) => this.gameplay(position)} 
                    />
            </Modal>
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

export default MonsterDisplay;
