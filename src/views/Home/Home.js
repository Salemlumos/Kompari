import { useEffect, useState } from "react"
import { Text ,View} from "react-native"
import { Drawer, Portal,Avatar, TouchableRipple, Button } from "react-native-paper"

import { firebase } from "../../config/fb"
import { theme } from "../../theme/theme"

export const Home = ({navigation}) =>{

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        // const fetchData = async ()=>{
        //     firebase.firestore().collection('Usuario')
        //     .onSnapshot(querySnapshot=>{
        //         const users =[]
        //         querySnapshot.forEach((doc)=>{
        //             const {email,senha} = doc.data()
        //             users.push({
        //                 id:doc.id,
        //                 email,
        //                 senha
        //             })
        //         })
        //         setUsuarios(users)
        //     })
      
        // }
        // fetchData().catch(e=>console.log(e.message))
      return () => {
      }
    }, [])
    

    return(
        <View>
           
            <View style={{backgroundColor:theme.colors.secondary,width:100,height:100,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:16,margin:10,overflow:"hidden"}}>

            <TouchableRipple style={{backgroundColor:theme.colors.secondary,width:100,height:100,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:16,margin:10,}} rippleColor={'lightblue'} onPress={()=>{navigation.navigate('Usuários')}}>  
                <>
                <Avatar.Icon style={{backgroundColor:'transparent'}} size={70} icon="account" />
                <Text style={{color:'white'}}>Usuários</Text>
                </>
            </TouchableRipple>
            </View>
        </View>
    )
}