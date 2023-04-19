import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {features} from "../implementations/features";
import {TouchableOpacity, Text, ScrollView, StyleSheet} from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {features.map((feature) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate(feature.screenName)}>
              <Text style={styles.title}>{feature.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 20,
  },
});

export default Home;
