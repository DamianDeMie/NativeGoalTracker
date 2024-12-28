import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  id: string;
  onDeleteItem?: (id: string) => void;
};

export default function GoalItem({ text, id, onDeleteItem }: Props) {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      onPress={() => onDeleteItem?.(id)}
      style={({ pressed }) => pressed && itemStyles.pressedItem}
    >
      <View style={itemStyles.listItem}>
        <Text style={itemStyles.listItemText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const itemStyles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    backgroundColor: "#6f47d9",
    color: "#fff",
    margin: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  listItemText: {
    color: "#fff",
    padding: 8,
  },
});
