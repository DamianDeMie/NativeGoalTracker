import { FlatList, Text, View } from "react-native";
import { styles } from "./styles/Styles";
import { useState } from "react";
import { Goal } from "./types";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState<Goal[]>([]);

  const addGoalHandler = (enteredGoalText: string) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goalList}
          renderItem={({ item }) => <GoalItem text={item.text} />}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>No goals yet. Add one!</Text>
          }
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}
