import { StyleProp, Text, TextStyle } from "react-native";
import { Colors } from "@/configs/colors";

type HeadlineSizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const useFontSize = (as: HeadlineSizes) => {
  if (as === "h1") {
    return 30;
  }
  if (as === "h2") {
    return 26;
  }
  if (as === "h3") {
    return 24;
  }
  if (as === "h4") {
    return 20;
  }
  if (as === "h5") {
    return 18;
  }
  if (as === "h6") {
    return 16;
  }
};

export const Headline = ({
  content,
  as,
  style,
}: {
  content: string;
  as: HeadlineSizes;
  style?: StyleProp<TextStyle>;
}) => {
  const fontSize = useFontSize(as);

  return (
    <Text
      style={[
        {
          fontSize,
          color: Colors.tertiary,
          fontWeight: "500",
        },
        style,
      ]}
    >
      {content}
    </Text>
  );
};
