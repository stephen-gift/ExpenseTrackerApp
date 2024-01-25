import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { GlobalStyles } from "../../constants/styles";

export default function Button({ onPress, children, mode, style ,disabled}) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
        disabled={disabled}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttontext, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
