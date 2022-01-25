import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
 
class SnackBar extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(20);
        this.fadeAnimation = new Animated.Value(0);
        this.ShowSnackBar = false;
        this.HideSnackBar = true;
        this.state = {
            message: ''
        };
    }
 
    ShowSnackBarFunction(message="Default SnackBar Message...", duration=3000) {
        if(this.ShowSnackBar === false){
            this.setState({ message: message });
            this.ShowSnackBar = true;
            Animated.timing(this.animatedValue, { toValue: 0, duration: 400, useNativeDriver: true }).start(this.hide(duration));
        }
    }

    hide = (duration) => {
        Animated.timing(this.fadeAnimation, { toValue: 1, useNativeDriver: true}).start();
        this.timerID = setTimeout(() => {
            if(this.HideSnackBar === true) {
                this.HideSnackBar = false;
                Animated.timing(this.animatedValue, { toValue: 20, duration: 400, useNativeDriver: true }).start(() => {
                    this.HideSnackBar = true;
                    this.ShowSnackBar = false;
                    clearTimeout(this.timerID);
                });
                Animated.timing(this.fadeAnimation, { toValue: 0, useNativeDriver: true}).start();
            }
        }, duration);
    }
    
    SnackBarCloseFunction = () => {
        if(this.HideSnackBar === true) {
            this.HideSnackBar = false;
            clearTimeout(this.timerID);
            Animated.timing(this.animatedValue, {
                toValue: 20,
                duration: 400, 
                useNativeDriver: true
            }).start(() =>{
                this.ShowSnackBar = false;
                this.HideSnackBar = true;
            });
        }
        Animated.timing(this.fadeAnimation, { toValue: 0, useNativeDriver: true}).start();
    }
    
    render() {
        return(
            <Animated.View style = {[{ transform: [{ translateY: this.animatedValue }]}, {...styles.SnackBarContainter, opacity: this.fadeAnimation} ]}>
                <View style={{ flex: 2 }}>
                    <Text onPress={() => this.setState({ message: 'User clicked snackbar' })} style={ styles.SnackBarMessage }>{ this.state.message }</Text>
                </View>
                <View style={{ width: 50, height: 50  }}>
                    <Text style = { styles.SnackBarUndoText} onPress = { this.SnackBarCloseFunction }>
                        <Icon name='x' color="#fff" size={24} />
                    </Text>
                </View>
            </Animated.View>
        );
    }
}
 
const styles = StyleSheet.create({
    SnackBarContainter: {
        position: 'absolute',
        backgroundColor: '#e62180',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 0,
        top: 10,
        right: 0,
        minHeight: 50,
        paddingVertical: 20,
        paddingLeft: 10,
        marginHorizontal: 30,
        borderRadius: 8
    },
    SnackBarMessage: {
        color: '#fff',
        fontSize: 14,
        fontFamily: "CenturyGothic",
        fontWeight: 'bold',
        lineHeight: 20
    },
    SnackBarUndoText:{
        color: '#FFF',
        fontSize: 24,
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        padding: 5,
        fontWeight: "bold"
    }
});
 
export default SnackBar;