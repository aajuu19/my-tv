import { StatusBar } from "expo-status-bar";
import { ShowsOverviewView } from "./features/shows/presentation/views";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "./configs";
import { Header } from "./components";

const Tab = createBottomTabNavigator();

const HomeView = () => {
  return (
    <View>
      <Text>Home text</Text>
    </View>
  );
};

const StarsView = () => {
  return (
    <View>
      <Text>Hier sind die Stars aufgelistet</Text>
    </View>
  );
};

const navigation: {
  name: string;
  component: () => React.JSX.Element;
  iconName: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    name: "Home",
    component: HomeView,
    iconName: "home",
  },
  {
    name: "Shows",
    component: ShowsOverviewView,
    iconName: "videocam",
  },
  {
    name: "Stars",
    component: StarsView,
    iconName: "star",
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {navigation.map(({ name, component, iconName }) => (
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? Colors.primary : Colors.tertiary}
                />
              ),
              tabBarActiveTintColor: Colors.primary,
              headerShown: false,
            }}
            name={name}
            component={component}
          />
        ))}
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
