import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const Btn = ({counter, increaseCounter}) =>(
  <View style={styles.container}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity onPress={()=>increaseCounter(counter)}>
      <Text style={{fontSize: 10}}>Aumentanding</Text>
      </TouchableOpacity>
        <Text>{counter}</Text>
    </View>
    <Text>sadsakjdksayour app!</Text>
  </View>  
);



const mapStateToProps = state => ({
        counter: state.counter
})

const mapDispatchToProps = dispatch => ({ //dispatch recibe un objeto, un type -> indentificador
  increaseCounter(counter){
    dispatch({
      type:'INCREASE_COUNTER',
      counter : counter
    })
  }
})


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 5
    },
  });
  
  //connect funcion que recibe una funcion, en la segunda recibe al componente
  //mapStateToProps --> funcion que mapea el estado y lo convierte en propiedades
  //mapDispatchToProps -> mapea las funciones en propiedades, llevan las acciones que son leidas por el reducer para poder cambiar el estado
  export default connect(mapStateToProps, mapDispatchToProps) (Btn);