import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import "@/global.css";

import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider";
import ToastProvider from "./components/ui/toast-provider";

import FormsScreen from "./screen/FormsScreen";
import ProfileScreen from "./screen/ProfileScreen";
import DisplayScreen from "./screen/DisplayScreen";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GluestackUIProvider>
      <ToastProvider>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerTitle: "Anahí De la Torre",
              headerShown: true,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "orange" },
            }}
          >
            <Drawer.Screen name="Forms" component={FormsScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Display" component={DisplayScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </GluestackUIProvider>
  );
}
