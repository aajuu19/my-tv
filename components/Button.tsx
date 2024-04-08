import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Define the props for your custom button
interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object; // Optionally include style to allow custom styling from the parent component
}

// Implement the button with your custom props
export const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define styles for your button
const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
