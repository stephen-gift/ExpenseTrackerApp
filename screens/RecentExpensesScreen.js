import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/context/expenseContext";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

export default function RecentExpenseScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpenseContext);

  useEffect(() => {
    async function getExpenses() {
      try {
        setIsFetching(true);
        const expenses = await fetchExpenses();
        setIsFetching(false);
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
