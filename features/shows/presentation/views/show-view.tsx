import { Text, View } from "react-native";
import { useShowViewModel } from "../view-models";

export const ShowView = () => {
  const { showDetails } = useShowViewModel();
  const { name, description } = showDetails;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
};
