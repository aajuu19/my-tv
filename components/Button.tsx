import { Colors } from "@/configs";
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
  variant?: "primary" | "ghost"; // Optionally include variant to allow different button styles
}

const getTextColor = (variant: ButtonProps["variant"]) => {
  if (variant === "primary") {
    return { color: Colors.light };
  }
  if (variant === "ghost") {
    return { color: Colors.tertiary };
  }
};

// Implement the button with your custom props
export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  variant = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      onPress={onPress}
    >
      <Text style={getTextColor(variant)}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define styles for your button
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
