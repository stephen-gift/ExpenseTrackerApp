import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: "89.29",
    date: new Date("2024-01-05"),
  },
  {
    id: "e2",
    description: "Dinner at a restaurant",
    amount: "45.99",
    date: new Date("2024-01-10"),
  },
  {
    id: "e3",
    description: "Movie night",
    amount: "25.50",
    date: new Date("2024-01-15"),
  },
  {
    id: "e4",
    description: "Groceries",
    amount: "120.75",
    date: new Date("2024-01-20"),
  },
  {
    id: "e5",
    description: "Gym membership",
    amount: "60.00",
    date: new Date("2024-01-25"),
  },
  // Add more objects as needed
  {
    id: "e6",
    description: "Tech gadgets",
    amount: "150.00",
    date: new Date("2024-02-01"),
  },
  {
    id: "e7",
    description: "Weekend getaway",
    amount: "200.50",
    date: new Date("2024-02-05"),
  },
  {
    id: "e8",
    description: "Online courses",
    amount: "80.00",
    date: new Date("2024-02-10"),
  },
  {
    id: "e9",
    description: "Home decor",
    amount: "55.75",
    date: new Date("2024-02-15"),
  },
  {
    id: "e10",
    description: "Coffee subscriptions",
    amount: "30.00",
    date: new Date("2024-02-20"),
  },
  // Add more objects as needed
  {
    id: "e11",
    description: "Fitness equipment",
    amount: "110.25",
    date: new Date("2024-02-25"),
  },
  {
    id: "e12",
    description: "Art supplies",
    amount: "40.50",
    date: new Date("2024-03-01"),
  },
  {
    id: "e13",
    description: "Car maintenance",
    amount: "95.80",
    date: new Date("2024-03-05"),
  },
  {
    id: "e14",
    description: "Book collection",
    amount: "75.00",
    date: new Date("2024-03-10"),
  },
  {
    id: "e15",
    description: "Outdoor gear",
    amount: "130.00",
    date: new Date("2024-03-15"),
  },
  // Add more objects as needed
  {
    id: "e16",
    description: "Subscription services",
    amount: "50.25",
    date: new Date("2024-03-20"),
  },
  {
    id: "e17",
    description: "DIY projects",
    amount: "70.50",
    date: new Date("2024-03-25"),
  },
  {
    id: "e18",
    description: "Pet supplies",
    amount: "35.80",
    date: new Date("2024-04-01"),
  },
  {
    id: "e19",
    description: "Cookware",
    amount: "90.00",
    date: new Date("2024-04-05"),
  },
  {
    id: "e20",
    description: "Music instruments",
    amount: "120.50",
    date: new Date("2024-04-10"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updateableExpense[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;

    default:
      return state;
  }
}
export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  return <ExpenseContext.Provider>{children}</ExpenseContext.Provider>;
}
