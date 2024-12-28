import { Button, TextInput, View } from "react-native";
import { styles } from "../styles/Styles";
import { useState } from "react";

type Props = {
  onAddGoal: (enteredGoalText: string) => void;
};

export default function GoalInput({ onAddGoal }: Props) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  /**
   * Handles input when a user enters text into the goal input field.
   */

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={enteredGoalText}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}
