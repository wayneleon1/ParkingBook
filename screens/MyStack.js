import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Register from "../screens/register";
import ComfirmForgetPassword from "../screens/comfrimForgetPassword";

const Tab = createBottomTabNavigator();

export default function MyStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen
        name="comfrimForgetPassword"
        component={ComfirmForgetPassword}
      />
    </Tab.Navigator>
  );
}
