import { ScrollView,Text } from "react-native"
import { styles } from "../../theme/styles"
import { useEffect,useState } from "react"
import { firebase } from "../../config/fb"
import { List } from "react-native-paper"

export const Usuarios = ({navigation}) => {


    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const fetchData = async ()=>{
            firebase.firestore().collection('Usuario')
            .onSnapshot(querySnapshot=>{
                const users =[]
                querySnapshot.forEach((doc)=>{
                    const {email,senha,nome,acesso} = doc.data()
                    users.push({
                        id:doc.id,
                        email,
                        senha,
                        nome,
                        acesso
                    })
                })
                setUsuarios(users)
            })
      
        }
        fetchData().catch(e=>console.log(e.message))
      return () => {
      }
    }, [])

    return(
        <ScrollView styles={styles.full_wh}>
            <List.Section>
            <List.Subheader>Lista</List.Subheader>
             {usuarios.map((user,idx)=>{
                console.log(user)
                return(
                    <List.Item
                    key={idx}
                      title={user.nome}
                      left={() => <List.Icon color={'gray'} icon="account" />}
                      onPress={()=>{
                        navigation.navigate('Usuário',{user:user})
                      }}
                    />
                )
            })}
            </List.Section>
        </ScrollView>
    )
}