import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import BoardBox from './BoardBox'


const Board = (props) => {
    return (
    <View>
        <Text>{props.turnPlayer ? "turno de x" : "turno de O"}</Text>
        {props.boxes.map(e =>  <BoardBox numberId={e}/>)}
        <View style={styles.boardContainer}>
            <View>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
            </View>
            <View>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
            </View>
            <View>
                <BoardBox/>
                <BoardBox/>
                <BoardBox/>
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
    turnPlayer: state.turnPlayer
})


export default connect(mapStateToProps, {}) (Board);
