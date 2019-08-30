import { createStore } from 'redux';

//el state no puede ser undefined, se define una data
const initialState = {
    counter: 0,
    PlayersTurn: true,
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
            let PlayersTurn = action.PlayersTurn
            console.log([newPlay[0],newPlay[4],newPlay[8]].join(''))
          
            if(newPlay[action.boxIndex] === ''){
                PlayersTurn = !PlayersTurn
                newPlay[action.boxIndex] = action.PlayersTurn ? 'X' : 'O'
            }
            return Object.assign({},state,{
                PlayersTurn: PlayersTurn,
                plays: newPlay
            })

        default:
            return state
      }
}

//recibe funcion reductora 
export default createStore(reducer)