 import React  from 'react';
 import { connect } from 'react-redux';

import { StyleSheet, Text, View,TouchableHighlight, Image} from 'react-native';

const BoardBox = ({border, numberId, playersTurn, changePlayer,plays}) => {
    
    return (
    <TouchableHighlight style={border} onPress={()=>changePlayer(playersTurn,numberId)} underlayColor="white">
       <Image
          resizeMode={'cover'}
          style={styles.img}
          source={plays[numberId] == "X" ? require('../img/x_img.png') : plays[numberId] == "O" ? require('../img/o_img.png') :"" }
          
        />
    </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 50, 
        height: 50,
        margin:5,
    },
    img: {
        margin: 5,
        width: 50, 
        height: 50,
    }
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