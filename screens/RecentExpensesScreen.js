import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/context/expenseContext";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenseScreen() {
  const expensesCtx = useContext(ExpenseContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod={"Last 7 days"}
      fallBackText={"No Expenses resgistered for the last 7 days"}
    />
  );
}

const styles = StyleSheet.create({});
