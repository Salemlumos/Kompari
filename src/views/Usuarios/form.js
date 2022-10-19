import { useController } from "react-hook-form";
import { Checkbox,List } from "react-native-paper";
export const form=[
    {
        type: 'email',
        name: 'email',

        rules: {
          // required: {
          //   value: true,
          //   message: 'Email is required',
          // },
        },
        textInputProps: {
          label: 'Email',
        },
      },
    {
        type: 'text',
        name: 'nome',

        rules: {
          // required: {
          //   value: true,
          //   message: 'Email is required',
          // },
        },
        textInputProps: {
          label: 'Nome',
        },
      },
      {
        type: 'password',
        name: 'password',
        rules: {
          // required: {
          //   value: true,
          //   message: 'Password is required',
          // },
        },
        textInputProps: {
          label: 'Senha',
        },
      },
      {
        type:'custom',
        name:'acesso',
        JSX:RememberMe
      }
]


function RememberMe(props) {
    const {name, rules, shouldUnregister, defaultValue, control} = props;
    const {field} = useController({
      name,
      rules,
      shouldUnregister,
      defaultValue,
      control,
    });
  
    return (
      <List.Item
        title={'Usuario Ativo?'}
        left={() => (
          <Checkbox.Android
            status={field.value}
            onPress={() => {
              field.onChange(field.value === 'checked' ? 'unchecked' : 'checked');
            }}
          />
        )}
      />
    )}