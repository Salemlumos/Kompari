
export const form = [
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
        type: 'password',
        name: 'password',
        rules: {
          // required: {
          //   value: true,
          //   message: 'Password is required',
          // },
        },
        textInputProps: {
          label: 'Password',
        },
      },
]