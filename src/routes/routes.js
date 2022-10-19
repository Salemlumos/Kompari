import { Login } from "../views/Login/Login"
import { Home } from "../views/Home/Home"
import { IconButton } from "react-native-paper"
import { theme } from "../theme/theme"
import { Usuarios } from "../views/Usuarios/Usuarios"
import { UsuarioView } from "../views/Usuarios/UsuarioView"

export const routes = [
    {
        title:'Login',
        component:Login,
        options:{
            headerShown: false
        }
    },
    {
        title:'Home',
        component:Home,
        options:{
            title: "Menu Principal",
            headerStyle: {
                backgroundColor: theme.colors.primary
              },
            headerLeft: () => (
                <IconButton
                    icon="menu"
                    iconColor={'white'}
                    size={40}
                    onPress={() => console.log('Pressed')}
                />
              ),
        }
    },
    {
        title:'Usuários',
        component:Usuarios,
        options:{
            title: "Usuários",
            headerStyle: {
                backgroundColor: theme.colors.primary
              },
              headerRight: () => (
                <IconButton
                    icon="plus"
                    iconColor={'white'}
                    size={30}
                    onPress={() => console.log('Pressed')}
                />
              ),
           
        }
    },
    {
        title:'Usuário',
        component:UsuarioView,
        options:{
            title: "Perfil Usuário",
            headerStyle: {
                backgroundColor: theme.colors.primary
              },
           
        }
    }
]