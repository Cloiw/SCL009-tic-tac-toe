import { createStore } from 'redux';
//el state no puede ser undefined, se define una data
const initialState = {
    counter: 0,
    tablero: []
}


//funcion reductora recibe data y un objeto action
const reducer = (state = initialState, action) => {
    switch( action.type ){
        case 'INCREASE_COUNTER': 
        return Object.assign({},state,{ 
            counter: action.counter+1 
        })
        
        case "sdsa":
            return state;

        default:
            return state
      }
}

//recibe funcion reductora 
export default createStore(reducer)