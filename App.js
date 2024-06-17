import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from "./src/pages/Login";
import SignUp from "./src/pages/Signup";
import MyTabBar from './src/routes';
import DetailsFrontEnd from './src/pages/Details/FrontEnd';
import DetailsBackEnd from './src/pages/Details/BackEnd';
import DetailsQA from './src/pages/Details/QA';
import DetailsFullStack from './src/pages/Details/FullStack';
import DetailsUxUi from './src/pages/Details/UxUi';
import DetailsPM from './src/pages/Details/PM';
import ProjectsDetails from './src/pages/ProjectsDetails';
import TeamDetails from './src/pages/TeamDetails';

import { Provider as UserContext } from './src/context/userContext'

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={MyTabBar} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="DetailsFrontEnd" component={DetailsFrontEnd} />
        <Stack.Screen name="DetailsBackEnd" component={DetailsBackEnd} />
        <Stack.Screen name="DetailsQA" component={DetailsQA} />
        <Stack.Screen name="DetailsFullStack" component={DetailsFullStack} />
        <Stack.Screen name="DetailsUxUi" component={DetailsUxUi} />
        <Stack.Screen name="DetailsPM" component={DetailsPM} />
        <Stack.Screen name="ProjectsDetails" component={ProjectsDetails} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <>
      <UserContext>
        <App />
      </UserContext>
    </>
  )
}