import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import BoardBox from './BoardBox'


const Board = (props) => {
    let win = false;
    let winnerPlay = "";

    switch(true){
        case (props.plays.slice(0,3).join('') === "XXX" || props.plays.slice(0,3).join('') === "OOO"):
            win = true;
            winnerPlay = "rowFirst"
        case (props.plays.slice(3,6).join('') === "XXX" || props.plays.slice(3,6).join('') === "OOO"):
            win = true;
            winnerPlay = "rowSecond"
        case (props.plays.slice(6,9).join('') === "XXX" || props.plays.slice(6,9).join('') === "OOO"):
            win = true;
            winnerPlay = "rowThird"
        case ([props.plays[0],props.plays[3],props.plays[6]].join('') === "XXX" || [props.plays[0],props.plays[3],props.plays[6]].join('') === "OOO"):
            win = true;
            winnerPlay = "colFirst"
        case ([props.plays[1],props.plays[4],props.plays[7]].join('') === "XXX" || [props.plays[1],props.plays[4],props.plays[7]].join('') === "OOO"):
            win = true;
            winnerPlay = "colSecond"
        case ([props.plays[2],props.plays[5],props.plays[8]].join('') === "XXX" || [props.plays[2],props.plays[5],props.plays[8]].join('') === "OOO"):
            win = true;
            winnerPlay = "colThird"
        case ([props.plays[0],props.plays[4],props.plays[8]].join('') === "XXX" || [props.plays[0],props.plays[4],props.plays[8]].join('') === "OOO"):
            win = true;
            winnerPlay = "diagFirst"
        case ([props.plays[2],props.plays[4],props.plays[6]].join('') === "XXX" || [props.plays[2],props.plays[4],props.plays[6]].join('') === "OOO"):
            win = true;
            winnerPlay = "diagSecond"
    }

    return (
    <View>
        {win && <Text>"wiins"</Text>}
        <Text>{props.PlayersTurn ? "turno de x" : "turno de O"}</Text>
        
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

const mapStateToProps = state => ({
    boxes: state.boxes,
    counter: state.counter,
    PlayersTurn: state.PlayersTurn,
    plays: state.plays
})


export default connect(mapStateToProps, {}) (Board);
