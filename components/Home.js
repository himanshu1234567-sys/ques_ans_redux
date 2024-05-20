import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { que_action_App } from './redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz); 
  const [ans, setAns] = useState('');
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [question, setQuestion] = useState([
    { id: 1, que: "Who is your PM", ans: "" },
    { id: 2, que: "Who is your CM", ans: "" },
    { id: 3, que: "What is the capital of India", ans: "" },
  ]);

  const navigation = useNavigation();

  const goToNext = () => {
    const newArr = question.map((item, ind) => {
      if (index === ind) {
        return { ...item, ans: ans };
      }
      return item;
    });

    setQuestion(newArr);
    setAns('');
    setIndex(index + 1);
    dispatch(que_action_App(newArr));
  };

  const submit = () => {
    const newArr = question.map((item, ind) => {
      if (index === ind) {
        return { ...item, ans: ans };
      }
      return item;
    });
    setQuestion(newArr);
    setModalVisible(true);
    setAns('');
    dispatch(que_action_App(newArr));
    console.log("actions ", que_action_App(newArr));
  };

  useEffect(() => {
    // console.log(question);
    console.log("getting data",questions);
  }, [question]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.questionText}>Que No: {index + 1}</Text>
        <Text style={styles.questionText}>{question[index].que}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Answer"
          value={ans}
          onChangeText={setAns}
        />
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
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
