import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenseScreen() {
  return <ExpensesOutput expensePeriod={"Last 7 days"} />;
}

const styles = StyleSheet.create({});
