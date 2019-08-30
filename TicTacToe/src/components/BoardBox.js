 import React  from 'react';
 import { connect } from 'react-redux';

import { StyleSheet, Text, View,TouchableHighlight} from 'react-native';

const BoardBox = ({numberId, playersTurn, changePlayer,plays}) => {

    return (
    <TouchableHighlight style={styles.button} onPress={()=>changePlayer(playersTurn,numberId)} underlayColor="white">
       
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
    playersTurn: state.playersTurn,
    plays : state.plays
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