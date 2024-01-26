import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesSummary({ expenses, periodName ,}) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + parseFloat(expense.amount);
  }, 0);
  const numberOfItems = expenses.length;
  return (
    <View style={styles.container}>
      <View>

      <Text style={styles.period}>{periodName}:</Text>
      <Text style={styles.count}>{numberOfItems} items</Text>
      </View>
      <Text style={styles.sum}>₦ {expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  count: {
    fontSize: 12,
    color: GlobalStyles.colors.primary500,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
