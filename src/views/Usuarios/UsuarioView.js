import { Alert, Text,View } from "react-native"
import { useForm } from "react-hook-form";
import { FormBuilder } from "react-native-paper-form-builder";
import { styles } from "../../theme/styles";
import { form } from "./form";
import { Button } from "react-native-paper";

export const UsuarioView = ({route,navigation}) =>{

    const {user} = route.params!=undefined?route.params:{}

    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
          nome: user.nome!=undefined?user.nome:'',
          email: user.email!=undefined?user.email:'',
          senha: user.senha!=undefined?user.senha:'',
          acesso:user.acesso!=undefined?user.acesso==1?'checked':'unchecked':'unchecked'
        },
        mode: 'onChange',
      });

      const submit = handleSubmit((data) => {
        hasConnection().then(conn=>{
            // if(conn){
            //     console.log('form data', data);
            //     navigation.navigate('Home')
            //     return
            // }
            // Alert.alert('Atenção','Seu aparelho não possui uma conexão com a internet.')
        })
      })

      const __deletarUsuario =()=>{
        Alert.alert('Atenção','Você tem certeza que deseja deletar o usuário '+user.nome,[
            {
                text: "Não",
                onPress: () => {return},
                style: "cancel"
              },
              { text: "Sim", onPress: () => console.log("OK Pressed") }
        ])
      }

    return (
        <View style={[styles.full_wh,styles.setInnerPadding(5)]}>
            <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={form}
            />
            <View style={[styles.center_aj]}>
                <Button onPress={()=>{}} >Salvar</Button>    
                <Button onPress={__deletarUsuario} >Deletar</Button>    
            </View>
        </View>
    )
}