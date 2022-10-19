import { Alert, Text,View } from "react-native"
import { styles } from "../../theme/styles"

import { FormBuilder } from "react-native-paper-form-builder"
import { useForm } from "react-hook-form"
import { form } from "./form"
import { Button } from "react-native-paper"

import { hasConnection } from "../../functions/device/hasConnection"

export const Login = ({navigation}) => {

    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
          email: '',
          password: '',
        },
        mode: 'onChange',
      });

      const submit = handleSubmit((data) => {
        hasConnection().then(conn=>{
            if(conn){
                console.log('form data', data);
                navigation.navigate('Home')
                return
            }
            Alert.alert('Atenção','Seu aparelho não possui uma conexão com a internet.')
        })
      })


    return (
        <View style={[styles.setFlex(1),styles.setInnerPadding(10),styles.full_wh]}>
            <View style={[styles.custom_h(30),styles.center_aj]}>  
                <Text>Bem Vindo ao Kompari</Text> 
            </View>
            <View style={[styles.custom_h(30)]}>
                <FormBuilder
                    control={control}
                    setFocus={setFocus}
                    formConfigArray={form}
                />
                <Button mode="contained" onPress={submit}>
                    Logar
                </Button>
            </View>
            <View style={[styles.custom_h(20),styles.center_aj]}>
                <Text>Versão: 1.0.0 BETA</Text> 
            </View>
        </View>
    )
}