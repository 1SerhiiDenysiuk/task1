import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBUhJvMzw3b53p1xkFUHd-Y1mbom178_CCAwKraBgvZXrdJylD&usqp=CAU'}} />
      <View style= {{margin: 10}}>
        <Text style= {styles.name}>Найкращий садік</Text>
        <Text style= {styles.age}>Вік дітей: 3-5</Text>
        <Text style= {{}}>Додаткова інформація про садік, бла бла бла</Text>
        <TextInput style ={{backgroundColor: 'grey', width: 200, height: 30, marginBottom: 10}}></TextInput>
        <TextInput style ={{backgroundColor: 'grey', width: 200, height: 30}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',

  },
  photo: {
    flex: 4
  },
  name: {
    flex: 1
  },
  age: {
    flex: 1
  },
});
