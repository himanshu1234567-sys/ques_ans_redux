import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const questions = useSelector((state) => state.quiz);
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}

        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Question: {item.que}</Text>
            <Text style={styles.itemText}>Answer: {item.ans}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});
