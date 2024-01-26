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

export function storeExpense(expenseData) {
  fetch(
    "https://stephen-expensetracker-default-rtdb.europe-west1.firebasedatabase.app/expense.json",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data; // You can process the response data if needed
    })
    .catch((error) => {
      console.error("Error storing expense data:", error.message);
      throw error; // You can choose to rethrow the error or handle it accordingly
    });
}
