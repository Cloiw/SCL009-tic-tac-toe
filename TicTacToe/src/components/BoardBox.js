import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View,TouchableHighlight, Image} from 'react-native';

const BoardBox = ({numberId, playersTurn, changePlayer,plays}) => {
    
    return (
        <TouchableHighlight style={styles.box} onPress={()=>changePlayer(playersTurn,numberId)} underlayColor="white">
            <Image
                resizeMode={'cover'}
                style={styles.img}
                source={plays[numberId] == "X" ? require('../img/x_img.png') : plays[numberId] == "O" ? require('../img/o_img.png') :"" }
            />
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    box:{
        width: 120,
        margin: 5, 
        borderRadius:10, 
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    img: {
        margin: 10,
        flex: 1,
        width: 100,
        height: 100,
        aspectRatio: 1
        
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