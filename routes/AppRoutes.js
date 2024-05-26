import Home from "../screens/Home";
import Register from "../screens/register";
import ComfirmForgetPassword from "../screens/comfrimForgetPassword";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="ComfirmForgetPassword"
        component={ComfirmForgetPassword}
      />
    </Stack.Navigator>
  );
}
