import React, { useState } from 'react';
import {SafeAreaView, View, StyleSheet, Text, TouchableWithoutFeedback} from "react-native";

const numbers = [1,2];

//DESTRUCTURING
const [numberOne, numberTwo] = numbers;

const App = () => {
  const [playerTimer, setPlayerTimer] = useState(15);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const onPlayerPress = () => {
    setIsPlayerTurn(false);
  }
  const onEnemyPress = () => {
    setIsPlayerTurn(true);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={onPlayerPress}>
        <View style={[styles.playerContainer, { backgroundColor: isPlayerTurn ? 'black' : 'grey' }]}>
          <Text style={styles.playerTimer}>{playerTimer}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onEnemyPress}>
        <View style={[styles.enemyContainer, { backgroundColor: isPlayerTurn ? 'grey' : 'black' }]}>
          <Text style={styles.enemyTimer}>15:00:00</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  playerContainer: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enemyContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerTimer: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  enemyTimer: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
