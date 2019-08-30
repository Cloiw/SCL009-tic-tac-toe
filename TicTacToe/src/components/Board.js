import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import BoardBox from './BoardBox'


const Board = ({checkWinner, winner, draw, winnerPlay, playersTurn}) => {
    
    checkWinner(winner,winnerPlay,draw)
    return (
       
    <View>
        {winner && <Text>"wiins"</Text>}
        {draw && <Text>"empateeedsafdsa"</Text>}
        <Text>{playersTurn ? "turno de x" : "turno de O"}</Text>
        
        <View style={styles.boardContainer}>
            <View>
                <BoardBox numberId="0"/>
                <BoardBox numberId="3"/>
                <BoardBox numberId="6"/>
            </View>
            <View>
                <BoardBox numberId="1"/>
                <BoardBox numberId="4"/>
                <BoardBox numberId="7"/>
            </View>
            <View>
                <BoardBox numberId="2"/>
                <BoardBox numberId="5"/>
                <BoardBox numberId="8"/>
            </View>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    boardContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        margin:20
        
    },
    board: {
        flex: 1,
        margin: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const mapDispatchToProps = dispatch => ({ //dispatch recibe un objeto, un type -> indentificador
    checkWinner(winner, winnerPlay, draw){
        dispatch({
            type:'CHECK_WINNER',
            winner: winner,
            draw: draw,
            winnerPlay: winnerPlay
        })
    }
})

const mapStateToProps = state => ({
    winner: state.winner,
    counter: state.counter,
    draw: state.draw,
    winnerPlay: state.winnerPlay,
    playersTurn: state.playersTurn,
    plays: state.plays
})


export default connect(mapStateToProps, mapDispatchToProps) (Board);
