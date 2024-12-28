import { Button, Modal, TextInput, View } from "react-native";
import { styles } from "../styles/Styles";
import { useState } from "react";

type Props = {
  isModalOpen: boolean;
  onAddGoal: (enteredGoalText: string) => void;
  onCloseModal: () => void;
};

export default function GoalInput({
  isModalOpen,
  onAddGoal,
  onCloseModal,
}: Props) {
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

  const closeModalHandler = () => {
    onCloseModal();
  };

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={enteredGoalText}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
