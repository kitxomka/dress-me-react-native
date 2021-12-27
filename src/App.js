import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";

import SuccessPage from "./pages/SuccessPage";
import DrawerRoutes from "./components/DrawerRoutes";

const Stack = createNativeStackNavigator();

const App = () => {
  /** App Routing - Stack.Navigator */
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={DrawerRoutes} />
            <Stack.Screen name="Success" component={SuccessPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
