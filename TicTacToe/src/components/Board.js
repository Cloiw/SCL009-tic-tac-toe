import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Button,  TouchableHighlight, ImageBackground} from 'react-native';
import BoardBox from './BoardBox'



const Board = ({reset, checkWinner, winner, draw, winnerPlay, playersTurn}) => {
    
    checkWinner(winner,winnerPlay,draw)
    return (
        <ImageBackground source={require('../img/bg_img.png')} imageStyle = {{resizeMode: 'repeat'}}style={{width: '100%', height: '100%'}}>
            <View style = {styles.container}>
                <View style = {{ flex: 1, marginTop: 10, justifyContent: 'flex-end' }}>
                    {winner && <Text style = {styles.text}>{playersTurn ? 'Gana O' : 'Gana X'}</Text>}
                    {draw && <Text style = {styles.text}>Empateeee</Text>}   
                </View>
                <View style = {{ flex:1, flexDirection: 'row', alignItems: 'center' }}>
                    {winner || draw ?
                    <Button
                    onPress={()=>reset()}
                    title= 'Jugar de nuevo'
                    color= '#841584'
                    /> : null}
                    {!winner && !draw && <Text style={styles.text}>Turno de</Text>}
                    {playersTurn && !winner && !draw && <Image style = {styles.icon} source={require('../img/x_img.png')} />}
                    {!playersTurn && !winner && !draw && <Image style = {styles.icon} source={require('../img/o_img.png')} />}
                </View>
                <View style={styles.boardContainer}>
                    <View>
                        <BoardBox  numberId = '0' />
                        <BoardBox  numberId = '3' />
                        <BoardBox  numberId = '6' />
                    </View>
                    <View>
                        <BoardBox numberId = '1' />
                        <BoardBox numberId = '4' />
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
    icon: {
        width: 80,
        height: 80,
        margin: 5
    },
    text: {
        fontSize: 30,
        color: 'white',
    },
    boardContainer: {
        width: '100%',
        flex: 6,
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
    },
    reset(){
        dispatch({
            type: 'PLAY_AGAIN'
        })
    }
})

const mapStateToProps = state => ({
    winner: state.winner,
    draw: state.draw,
    winnerPlay: state.winnerPlay,
    playersTurn: state.playersTurn,
    plays: state.plays
})


export default connect(mapStateToProps, mapDispatchToProps) (Board);
