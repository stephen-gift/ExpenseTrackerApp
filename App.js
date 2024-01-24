import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpensesScreen from "./screens/ManageExpenseScreen";
import RecentExpenseScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverviewScreen({ route }) {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
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
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverviewScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpensesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
