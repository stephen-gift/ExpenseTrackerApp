import axios from "axios";
// export function storeExpense(expenseData) {
//   axios.post(
//     "https://stephen-expense-tracker-default-rtdb.firebaseio.com/expenses.json",
//     expenseData
//   );
// }

export function storeExpense(expenseData) {
  // Assuming you are using Firebase Realtime Database
  const firebaseEndpoint =
    "https://stephen-expensetracker-default-rtdb.europe-west1.firebasedatabase.app/expense.json";
  axios.post(firebaseEndpoint, expenseData);
}
