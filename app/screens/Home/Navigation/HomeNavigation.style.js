import {StyleSheet} from 'react-native';

export const styles =StyleSheet.create({
    containerNav:{
        height: this.startHeaderHeight,
        backgroundColor: '#14B268',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2
    },
    sectionTitle:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionLogo:{
        width:40, 
        height:40, 
        padding:2, 
        backgroundColor:"#ffffff", 
        marginRight:5, 
        borderRadius:5
    }
})