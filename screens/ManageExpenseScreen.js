import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

export default function ManageExpensesScreen({ route, navigation }) {
  const editedexpenseId = route.params?.expenseId;
  const isEditing = !!editedexpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpensesScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
