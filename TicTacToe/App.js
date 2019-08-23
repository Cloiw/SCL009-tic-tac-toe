import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'; //envuelve toda la app, tiene que saber que va a proveer o: un store
import store from './store'
import Btn from './src/components/Btn'


class App extends Component {
  render () {
    return (
    <Provider store={store}>
      <Btn/>
    </Provider>
    )
}}

export default App;