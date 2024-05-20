import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const OptionResult = () => {
    const questions = useSelector((state) => state.quiz);
    console.log(questions);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Option Result</Text>
            {questions.map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                    <Text style={styles.questionText}>{`Que ${index + 1}: ${question.que}`}</Text>
                    <Text style={styles.answerText}>{`Answer: ${question.options.find(opt => opt.id === question.ans)?.text}`}</Text>
                </View>
            ))}
        </View>
    );
};

export default OptionResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    questionContainer: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    questionText: {
        fontSize: 18,
        color: '#333',
    },
    answerText: {
        fontSize: 16,
        color: '#007BFF',
    },
});
