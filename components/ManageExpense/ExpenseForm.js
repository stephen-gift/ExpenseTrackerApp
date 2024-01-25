import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";

export default function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setAmountValue((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          numberOfLines: 5,
          //   autoCorrect: false,
          //   autoCapitalize: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { marginTop: 40 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
