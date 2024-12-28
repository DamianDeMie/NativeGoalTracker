import { Button, FlatList, Text, View } from "react-native";
import { styles } from "styles/Styles";
import { useState } from "react";
import { Goal } from "types";

import GoalItem from "components/GoalItem";
import GoalInput from "components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goalList, setGoalList] = useState<Goal[]>([]);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  const addGoalHandler = (enteredGoalText: string) => {
    if (enteredGoalText === "") {
      alert("Please enter a Goal");
      return;
    }
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (id: string) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color="#6f47d9"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        isModalOpen={modalVisible}
        onAddGoal={addGoalHandler}
        onCloseModal={() => setModalVisible(false)}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={goalList}
          renderItem={({ item }) => (
            <GoalItem
              text={item.text}
              id={item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          ListEmptyComponent={<Text>No goals yet. Add one!</Text>}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}
