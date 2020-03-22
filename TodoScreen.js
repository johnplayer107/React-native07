import React,{useState} from 'react';
import { SafeAreaView,View,Text,StyleSheet,FlatList,Platform,Button } from 'react-native';
import { Header } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import InputToList from '../components/InputToList';
import { DATAS } from '../data/dummy-data';


const TodoScreen = props => {
 
const [isAddMode, setIsAddMode] = useState(false);


const ModalHandler = () => {
  setIsAddMode(true);
};

  return (
    <SafeAreaView style={styles.screen}>
      <Text>Todo Screen!</Text>
      <Button title="ADD" onPress={ () => setIsAddMode(true) }/>
      <InputToList visible={isAddMode}/>
    </SafeAreaView>
  );
      
 };

 TodoScreen.navigationOptions = navigationData =>{
  return {
    title: 'YOUR TITLE HERE',    
    headerTitle: 'ADD',
    headerStyle: {backgroundColor:'#3c3c3c'},
    headerRight: (
      <HeaderButtons>
        <Button title="ADD" />
      </HeaderButtons>
    )
  };
 };
    
    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });

export default TodoScreen;
