import { createStore } from 'redux';
import { addListener } from 'expo/build/Updates/Updates';
//el state no puede ser undefined, se define una data
const initialState = {
    counter: 0,
    turnPlayer: true,
    boxes: ['0', '1', '2', '3', '4', '5','6','7','8'],
    plays: ['', '', '', '', '', '', '', '', '']
}


//funcion reductora recibe data y un objeto action
const reducer = (state = initialState, action) => {
    switch( action.type ){
        case 'INCREASE_COUNTER': 
        return Object.assign({},state,{ 
            counter: action.counter+1 
        })
        
        case 'CHANGE_PLAYER':
            let newPlay = [...state.plays]
            let turnPlayer = action.turnPlayer
            if(newPlay[action.boxIndex] === ''){
                turnPlayer = !turnPlayer
                newPlay[action.boxIndex] = action.turnPlayer ? 'x' : 'O'
            }
            return Object.assign({},state,{
                turnPlayer: turnPlayer,
                plays: newPlay
            })

        default:
            return state
      }
}

//recibe funcion reductora 
export default createStore(reducer)