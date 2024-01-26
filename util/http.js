import axios from "axios";
// export function storeExpense(expenseData) {
//   axios.post(
//     "https://stephen-expense-tracker-default-rtdb.firebaseio.com/expenses.json",
//     expenseData
//   );
// }

// export function storeExpense(expenseData) {
//   // Assuming you are using Firebase Realtime Database
//   const firebaseEndpoint =
//     "https://stephen-expensetracker-default-rtdb.europe-west1.firebasedatabase.app/expense.json";
//   axios.post(firebaseEndpoint, expenseData);
// }

const BACKEND_URL =
  "https://stephen-expensetracker-default-rtdb.europe-west1.firebasedatabase.app";
export async function storeExpense(expenseData) {
  try {
    const response = await fetch(BACKEND_URL + "/expenses.json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });

    const data = await response.json();
    const id = data.name;
    return id;
  } catch (error) {
    console.error("Error storing expense data:", error.message);
    throw error; // You can choose to rethrow the error or handle it accordingly
  }
}

export async function fetchExpenses() {
  //   const response = await fetch(BACKEND_URL + "/expenses.json");

  //   const expenses = [];
  //   console.log(response.data);
  //   for (const key in response.data) {
  //     const expenseObj = {
  //       id: key,
  //       date: response.data[key].date,
  //       amount: response.data[key].amount,
  //       description: response.data[key].description,
  //     };
  //     expenses.push(expenseObj);
  //   }

  //   return expenses;

  try {
    const response = await fetch(BACKEND_URL + "/expenses.json");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const expenses = await response.json();

    return Object.keys(expenses).map((key) => ({
      id: key,
      date: new Date(expenses[key].date),
      amount: expenses[key].amount,
      description: expenses[key].description,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
}
