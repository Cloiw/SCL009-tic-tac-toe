import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground} from 'react-native';
import BoardBox from './BoardBox'


const Board = ({checkWinner, winner, draw, winnerPlay, playersTurn}) => {
    
    checkWinner(winner,winnerPlay,draw)
    return (
        <ImageBackground source={require('../img/bg_img.png')} imageStyle = {{resizeMode: 'repeat'}}style={{width: '100%', height: '100%'}}>
            <View style = {styles.container}>
                <View style = {{ flex:1, width: "100%"}}>
                    <Image source={require('../img/x_img.png')} />
                </View>
                <View style = {{ flex:1, width: "100%"}}>
                    {winner && <Text>"wiins"</Text>}
                    {draw && <Text>"empateeedsafdsa"</Text>}
                    <Text>{playersTurn ? 'turno de x' : 'turno de O'}</Text>
                </View>
                <View style={styles.boardContainer}>
                    <View>
                        <BoardBox  numberId ='0' />
                        <BoardBox  numberId = '3'/>
                        <BoardBox  numberId = '6' />
                    </View>
                    <View>
                        <BoardBox numberId = '1' />
                        <BoardBox numberId = '4'/>
                        <BoardBox numberId = '7' />
                    </View>
                    <View>
                        <BoardBox  numberId = '2' />
                        <BoardBox  numberId = '5' />
                        <BoardBox  numberId = '8' />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    boardContainer: {
        width: '100%',
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        aspectRatio: 1,
        justifyContent: 'center',
    },
    borderBox: {   
        borderColor: '#47479a',
        borderBottomWidth: 4,
    },
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
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
