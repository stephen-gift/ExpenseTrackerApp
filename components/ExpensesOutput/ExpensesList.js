import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

function renderExpenseItem({item}) {
  return <Text>{item.description}</Text>;
}
export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
