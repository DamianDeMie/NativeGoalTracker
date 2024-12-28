import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

export default function GoalItem({ text }: Props) {
  return (
    <View style={itemStyles.listItem}>
      <Text style={itemStyles.listItemText}>{text}</Text>
    </View>
  );
}

const itemStyles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    backgroundColor: "#6f47d9",
    color: "#fff",
    margin: 8,
    padding: 8,
  },
  listItemText: {
    color: "#fff",
  },
});
