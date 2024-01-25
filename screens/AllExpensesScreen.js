import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/context/expenseContext";

export default function AllExpensesScreen() {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensePeriod={"Total"}
      fallBackText={"No registered expenses found"}
    />
  );
}

const styles = StyleSheet.create({});
