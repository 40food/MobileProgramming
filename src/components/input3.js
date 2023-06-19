import { StyleSheet, Text, TextInput, View } from "react-native";
import { forwardRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BLACK } from "../colors";

export const KeyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
};

export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};

const Input3 = forwardRef(({ title, iconName, ...props }, ref) => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.title}>{title}</Text>

      <View>
        <TextInput
          ref={ref}
          {...props}
          style={[defaultStyles.input, iconName && { paddingLeft: 40 }]}
          textContentType="none"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={defaultStyles.icon}>
          <MaterialCommunityIcons name={iconName} size={24} color={BLACK} />
        </View>
      </View>
    </View>
  );
});

Input3.displayName = "Input3";

const defaultStyles = StyleSheet.create({
  container: {
    width: "10%",
    // marginRight: 100,
    marginRight: 70,
    justifyContent: 'flex-start',
    marginLeft: 3,
    

  },
  title: {
    marginBottom: 17,
    fontWeight: "700",
    fontSize: 16,
    width:'10%',
    
  },
  input: {
    // flexDirection: "row",
    // borderBottomWidth: 2,
    // borderRadius: 1,
    // height: 15,
    // justifyContent: 'center'
    // paddingHorizontal: 10,

  },
  icon: {
    paddingHorizontal:300,
    // position: "absolute",
    // left: 8,
    // height: "100%",
    // justifyContent: 'center',

  },
});

export default Input3;