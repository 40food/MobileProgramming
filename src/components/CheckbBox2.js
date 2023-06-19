import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
  
const CheckBox2 = (props) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";
  
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#000" />
            </Pressable>
        </View>
    );
};
  
export default CheckBox2;
  
const styles = StyleSheet.create({
    container: {
        // justifyContent: "flex-start",
        // alignItems: "center",
        flexDirection: "row",
        width: 25,
        marginTop: 28,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 18,
        color: "#000",
        // marginLeft: 500,
        fontWeight: "500",

    },
});