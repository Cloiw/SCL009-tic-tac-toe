import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Image} from 'react-native';

const BoardBox = ({numberId, playersTurn, changePlayer, plays, winnerPlay, winner}) => {

    return (
        <TouchableWithoutFeedback  onPress={!winner ? () => changePlayer(playersTurn,numberId) : null} >
            <View style={
                winnerPlay == 'rowFirst' && numberId == 0 || 
                winnerPlay == 'rowFirst' && numberId == 1 || 
                winnerPlay == 'rowFirst' && numberId == 2 ||
                winnerPlay == 'rowSecond' && numberId == 3 ||
                winnerPlay == 'rowSecond' && numberId == 4 ||
                winnerPlay == 'rowSecond' && numberId == 5 ||
                winnerPlay == 'rowThird' && numberId == 6 ||
                winnerPlay == 'rowThird' && numberId == 7 ||
                winnerPlay == 'rowThird' && numberId == 8 ||
                winnerPlay == 'colFirst' && numberId == 0 ||
                winnerPlay == 'colFirst' && numberId == 3 ||
                winnerPlay == 'colFirst' && numberId == 6 ||
                winnerPlay == 'colSecond' && numberId == 1 ||
                winnerPlay == 'colSecond' && numberId == 4 ||
                winnerPlay == 'colSecond' && numberId == 7 ||
                winnerPlay == 'colThird' && numberId == 2 ||
                winnerPlay == 'colThird' && numberId == 5 ||
                winnerPlay == 'colThird' && numberId == 8 ||
                winnerPlay == 'diagFirst' && numberId == 0 ||
                winnerPlay == 'diagFirst' && numberId == 4 ||
                winnerPlay == 'diagFirst' && numberId == 8 ||
                winnerPlay == 'diagSecond' && numberId == 2 ||
                winnerPlay == 'diagSecond' && numberId == 4 ||
                winnerPlay == 'diagSecond' && numberId == 6
                
                ?
                styles.winner : styles.box }
            >
                
                <Image
                    style={styles.img}
                    source={plays[numberId] == "X" ? require('../img/x_img.png') : plays[numberId] == "O" ? require('../img/o_img.png') : require('../img/none.png') }
                />
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    winner:{
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        margin: 5, 
        borderRadius:10,

    },
    box:{
        width: 100,
        height: 100,
        margin: 5, 
        borderRadius:10, 
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    img: {
        margin: 10,
        flex: 1,
        width: 82,
        height: 82, 
    }
});


const mapStateToProps = state => ({
    playersTurn: state.playersTurn,
    plays : state.plays,
    winnerPlay : state.winnerPlay,
    winner : state.winner
})

const mapDispatchToProps = dispatch => ({ //dispatch recibe un objeto, un type -> indentificador
    changePlayer(playersTurn, boxIndex){
        dispatch({
            type:'CHANGE_PLAYER',
            playersTurn : playersTurn,
            boxIndex : boxIndex
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps) (BoardBox);