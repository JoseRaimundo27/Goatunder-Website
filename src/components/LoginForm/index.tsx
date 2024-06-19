import Form from '../Form/index.tsx'

const LoginForm = () => {

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
        <Form
            titulo='Login'
            label_user='Usuário'
            label_password_1='Senha'
            onSubmit={onSubmit}
        />
    )
}

export default LoginForm


