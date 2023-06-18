import {Pressable, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {BLACK, GRAY, PRIMARY, WHITE, GHOSTWHITE, LIGHTGRAY, ALICEBLUE} from '../colors';
import React from 'react';


const Button2 = ({title, onPress, disabled}) => {
    return (

        <Pressable
        onPress = {onPress}
        style = {({ pressed}) => [
            styles.container,
            pressed && { backgroundColor : GHOSTWHITE.GDARK},
            disabled && { backgroundColor: GHOSTWHITE.GLIGHT, opacity: 0.6},
        ]}
        disabled={disabled}
        >
            <Text style = {styles.title}>{title}</Text>
            </Pressable>
    );
};

Button2.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {

        borderRadius: 10,
        paddingHorizontal:80,
        paddingVertical:15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        flexDirection: 'row',
        backgroundColor: GHOSTWHITE.DEFAULT,
        width: '80%',

    },
    title: {
        
        color: BLACK,
        fontSize: 16,
        fontWeight: '700',
        width:'150%',
    },
});



export default Button2;