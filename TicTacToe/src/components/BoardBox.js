 import React  from 'react';
 import { connect } from 'react-redux';

import { StyleSheet, Text, View,TouchableHighlight} from 'react-native';

const BoardBox = ({numberId, turnPlayer, changePlayer,plays}) => {

    return (
    <TouchableHighlight style={styles.button} onPress={()=>changePlayer(turnPlayer,numberId)} underlayColor="white">
       
            <Text>{plays[numberId]} </Text>
        
    </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    button: {
        padding: 70,
        margin:5,
        backgroundColor: 'red',
    },
});


const mapStateToProps = state => ({
    turnPlayer: state.turnPlayer,
    plays : state.plays
})

const mapDispatchToProps = dispatch => ({ //dispatch recibe un objeto, un type -> indentificador
    changePlayer(turnPlayer, boxIndex){
        dispatch({
            type:'CHANGE_PLAYER',
            turnPlayer : turnPlayer,
            boxIndex : boxIndex
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps) (BoardBox);