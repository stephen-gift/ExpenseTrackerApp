import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { GlobalStyles } from "../../constants/styles";

export default function Button({ onPress, children, mode, style, disabled }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}
        disabled={disabled}
      >
        <View
          style={[
            styles.button,
            mode === "flat" && styles.flat,
            disabled && styles.disabledButton,
          ]}
        >
          <Text
            style={[
              styles.buttontext,
              mode === "flat" && styles.flatText,
              disabled && styles.disabledText,
            ]}
          >
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
  disabledButton: {
    backgroundColor: GlobalStyles.colors.gray500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  disabledText: {
    color: GlobalStyles.colors.gray700,
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
