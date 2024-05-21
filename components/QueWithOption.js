import React, { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { que_action_Options } from './redux/action';
import { useNavigation } from '@react-navigation/native';

const QueWithOption = () => {
    const questions = useSelector((state) => state.quiz);

    const [goback, setGoBack] = useState(false)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const getData = useSelector((state) => state.quiz);
    const [selectedValue, setSelectedValue] = useState('');
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState([
        {
            id: 1,
            que: "Who is the Prime Minister of India?",
            options: [
                { id: 'a', text: "Narendra Modi" },
                { id: 'b', text: "Rahul Gandhi" },
                { id: 'c', text: "Soniya Gandhi" },
                { id: 'd', text: "Shubham Verma" }
            ],
            ans: ''
        },
        {
            id: 2,
            que: "Who is the Chief Minister of MP?",
            options: [
                { id: 'a', text: "Shivraj MAMA" },
                { id: 'b', text: "Mohan Yadav" },
                { id: 'c', text: "Kalyan" },
                { id: 'd', text: "Shubham Verma" }
            ],
            ans: ''
        },
        {
            id: 3,
            que: "What is the capital of India?",
            options: [
                { id: 'a', text: "Maharashtra" },
                { id: 'b', text: "Delhi" },
                { id: 'c', text: "M.P" },
                { id: 'd', text: "Punjab" }
            ],
            ans: ''
        }
    ]);

    const goToNext = () => {
        const newArr = question.map((item, ind) => {
            if (index === ind) {
                return {
                    ...item,
                    ans: selectedValue
                };
            }
            return item;
        });

        setQuestion(newArr);
        setIndex(index + 1);
        setSelectedValue('');
        dispatch(que_action_Options(newArr));
    };

    const submit = () => {
        const newArr = question.map((item, ind) => {
            if (index === ind) {
                return {
                    ...item,
                    ans: selectedValue
                };
            }
            return item;
        });

        setModalVisible(true);
        dispatch(que_action_Options(newArr));
        setQuestion(newArr);
        console.log('Submit the answers', newArr);
    };
    const goBack = () => {
        const newArr = question.map((item, ind) => {
            if (index === ind) {
                return {
                    ...item, ans: selectedValue

                };
            }
            return item;
        });
        if (index == 0) {
            return {

            }
        }
        setQuestion(newArr);
        setIndex(index - 1);
        // setSelectedValue(selectedValue);
        dispatch(que_action_Options(newArr));
        setGoBack(true)
        questions;



        console.log("hiii ", questions);
    }

    useEffect(() => {
        console.log(getData);
    }, [getData]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.questionText}>Que No: {index + 1}</Text>
                <Text style={styles.questionText}>{question[index].que}</Text>
            </View>

            <View>
                {question[index].options.map((option) => (
                    <View key={option.id} style={styles.radioButton}>
                        <RadioButton
                            value={option.id}
                            status={selectedValue === option.id ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue(option.id)}
                            color="#007BFF"
                        />
                        <Text style={styles.radioLabel}>{option.text}</Text>
                    </View>
                ))}
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={question.length === index + 1 ? submit : goToNext}
                >
                    <Text style={styles.buttonText}>{question.length === index + 1 ? 'Submit' : 'Go To Next'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Test has been Completed!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('Result');
                                }}
                            >
                                <Text style={styles.textStyle}>See Result</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goBack}
                >
                    <Text style={styles.buttonText}>back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QueWithOption;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
