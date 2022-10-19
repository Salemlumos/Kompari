import { StyleSheet } from "react-native";
import { theme } from "./theme";
import { vw, vh, vmin, vmax } from 'react-native-viewport-units';

export const styles = StyleSheet.create({
    full_w:{
        width:100*vw
    },
    full_h:{
        height:100*vh
    },
    full_wh:{
        width:100*vw,
        height:100*vh
    },
    custom_h:(number)=>{
        return{height:number*vh}
    },


    setFlex:(number)=>{
        return {flex:number}
    },
    margin_all:(number)=>{
        return {margin:number}
    },

    setInnerPadding:(number)=>{
        return {padding:number*vw}
    },

    center_aj:{
        display:'flex',
        justifyContent:'center',
        alignItems:"center"
    },


    bg_color_pri:{
        backgroundColor:theme.colors.primary
    },
    bg_color_sec:{
        backgroundColor:theme.colors.secondary
    }

})