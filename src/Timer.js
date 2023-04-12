import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Timer from './components/Timer';
import TimerButton from './components/TimerButton';
import TimerCounter from './components/TimerCounter';

let interval;
const INITIAL_TIMER_VALUE = 15*60;

const App = () => {
  const [timer, setTimer] = useState(INITIAL_TIMER_VALUE);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(interval);
      setIsStarted(false);
    }
  }, [timer]);

  useEffect(() => {
    if (isStarted === false) {
      clearInterval(interval);
      return;
    }
    interval = setInterval(() => {
      setTimer((valoreAttualeTimer) => valoreAttualeTimer - 1);
    }, 1000);
  }, [isStarted] /* array di dipendenze */);

  const onPressStartStop = () => {
    setIsStarted(!isStarted);
  };

  const onPressReset = () => {
    setTimer(INITIAL_TIMER_VALUE);
    clearInterval(interval);
  };

  return (
    // Inizio JSX
    <SafeAreaView style={styles.safeArea}>
      <View style={{ paddingHorizontal: 16 }}>
        <TimerCounter onSave={(v) => setTimer(v)} />
      </View>
      <View style={[styles.flex, styles.timerContainer]}>
      {/* Text per visualizzare timer */}
       <Timer formatted={true} timer={timer} />
      </View>
      <View style={[styles.flex, styles.buttonsContainer]}>
        <TimerButton
          onPressButton={onPressStartStop}
          title={isStarted ? 'Stop' : 'Start'}
        />
        <View style={styles.separator} />
        <TimerButton
          small={true}
          onPressButton={onPressReset}
          title={"Reset"}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 16,
  },
  buttonStartContainer: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 20,
  },
});
