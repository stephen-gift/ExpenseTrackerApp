import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

export default function ExpensesOutput({ expenses, expensePeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensePeriod} />
      <ExpensesList />
    </View>
  );
}

const styles = StyleSheet.create({});
