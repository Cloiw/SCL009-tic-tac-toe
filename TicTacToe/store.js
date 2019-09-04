import { createStore } from 'redux';

//el state no puede ser undefined, se define una data
const initialState = {
    plays: ['','', '', '', '', '', '', '', '', ''],
    playersTurn: true,
    winner: false,
    draw: false,
    winnerPlay: ""
}

//funcion reductora recibe data y un objeto action
const reducer = (state = initialState, action) => {
    switch( action.type ){
        case 'PLAY_AGAIN' : 
        state = initialState
        return Object.assign({},state)
        
        case 'CHANGE_PLAYER':
            let newPlay = [...state.plays]
            let playersTurn = action.playersTurn
            
            if(newPlay[action.boxIndex] === ''){
                playersTurn = !playersTurn
                newPlay[action.boxIndex] = action.playersTurn ? 'X' : 'O'
            }
            return Object.assign({},state,{
                playersTurn: playersTurn,
                plays: newPlay
            })
        
        case 'CHECK_WINNER':
            let winner = action.winner;
            let draw = action.draw;
            let winnerPlay = action.winnerPlay;
            let checkPlays = [...state.plays];
            
            switch(true){
                case (checkPlays.slice(0,3).join('') === "XXX" || checkPlays.slice(0,3).join('') === "OOO"):
                    winner = true;
                    winnerPlay = "rowFirst"
                    break;
                case (checkPlays.slice(3,6).join('') === "XXX" || checkPlays.slice(3,6).join('') === "OOO"):
                    winner = true;
                    winnerPlay = "rowSecond"
                    break;
                case (checkPlays.slice(6,9).join('') === "XXX" || checkPlays.slice(6,9).join('') === "OOO"):
                    winner = true;
                    winnerPlay = "rowThird"
                    break;
                case ([checkPlays[0],checkPlays[3],checkPlays[6]].join('') === "XXX" || [checkPlays[0],checkPlays[3],checkPlays[6]].join('') === "OOO"):
                    winner = true;
                    winnerPlay = "colFirst"
                    break;
                case ([checkPlays[1],checkPlays[4],checkPlays[7]].join('') === "XXX" || [checkPlays[1],checkPlays[4],checkPlays[7]].join('') === "OOO"):
                    winner = true;
                    winnerPlay = "colSecond"
                    break;
                case ([checkPlays[2],checkPlays[5],checkPlays[8]].join('') === "XXX" || [checkPlays[2],checkPlays[5],checkPlays[8]].join('') === "OOO"):
                    winner = true;
                    winnerPlay = "colThird"
                    break;
                case ([checkPlays[0],checkPlays[4],checkPlays[8]].join('') === "XXX" || [checkPlays[0],checkPlays[4],checkPlays[8]].join('') === "OOO"):
                    winner = true;
                    winnerPlay = "diagFirst"
                    break;
                case ([checkPlays[2],checkPlays[4],checkPlays[6]].join('') === "XXX" || [checkPlays[2],checkPlays[4],checkPlays[6]].join('') === "OOO"):
                    winner = true;
                    winnerPlay = "diagSecond"
                    break;
            }

            for(let i=0; checkPlays.length > i; i++){
                if(checkPlays[i] === ""){
                    draw = false;
                }
                if(checkPlays.join("").length === 9 && !winner ){
                    draw = true;
                } 
            }

            return Object.assign({},state,{ 
                winner: winner,
                winnerPlay: winnerPlay,
                draw: draw
            })

        default:
            return state
    }
}

//recibe funcion reductora 
export default createStore(reducer)