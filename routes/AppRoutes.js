import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Register from "../screens/register";
import ComfirmForgetPassword from "../screens/comfrimForgetPassword";
import LoginWithEmail from "../screens/LoginWithEmail";
import LoginWithphone from "../screens/LoginWithPhone";
import ForgetPassword from "../screens/ForgetPassword";
import HomeRoutes from "./HomeRoutes";

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
      <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
      <Stack.Screen name="LoginWithphone" component={LoginWithphone} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
    </Stack.Navigator>
  );
}
