import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, SignUp } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const Auth = () => {
    const theme = useContext(ThemeContext);

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown: false }}
            />
            
            <Stack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{
                    headerTitleAlign: "center", 
                    headerBackTitleVisible: false,
                    headerTintColor: theme.text, 
                    headerLeft: ({ onPress, tintColor }) => (
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={38}
                            color={tintColor}
                            onPress={onPress}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default Auth;
