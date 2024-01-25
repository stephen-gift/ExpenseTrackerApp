import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpensesScreen from "./screens/ManageExpenseScreen";
import RecentExpenseScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/context/expenseContext";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverviewScreen({ route }) {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"add"}
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenseScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "hourglass" : "hourglass-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "document" : "document-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverviewScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpensesScreen}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
