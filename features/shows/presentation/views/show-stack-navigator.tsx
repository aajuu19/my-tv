import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShowsOverviewView } from "./shows-overview-view";
import { ShowView } from "./show-view";

const ShowStack = createNativeStackNavigator();

export const ShowStackNavigator = () => {
  return (
    <ShowStack.Navigator>
      <ShowStack.Screen name="ShowPage" component={ShowsOverviewView} />
      <ShowStack.Screen name="ShowDetailsPage" component={ShowView} />
    </ShowStack.Navigator>
  );
};
